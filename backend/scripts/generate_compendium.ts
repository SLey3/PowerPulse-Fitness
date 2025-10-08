import * as fs from 'fs'
import { join } from 'path'
import * as readline from 'readline'
import csv from 'csv-parser'
import { exit, stdin, stdout } from "process"
import { tidy, rename, select, filter } from '@tidyjs/tidy'

const rl = readline.createInterface({ input: stdin, output: stdout })

// create parser
const CompendiumBlacklist = [
    "Dancing",
    "Home Activities",
    "Home Repair",
    "Inactivity",
    "Lawn & Garden",
    "Music Playing",
    "Occupation",
    "Self Care",
    "Sexual Activity",
    "Transportation",
    "Religious Activities",
    "Volunteer Activities",
    "Video Games"
]


async function parseCompendium() {
    return new Promise<void>((resolve, reject) => {
        const compendium: any[] = []

        console.log("Commencing parsing. Reading primary data file...")

        fs.createReadStream(join(__dirname, '../src/compendium/data/2024_Adult_Compendium_MET.csv'))
        .pipe(csv())
        .on('data', row => {
            compendium.push(row)
        })
        .on('end', () => {
            console.log("data read, start parsing...")

            const parsedCompendium = tidy(
                compendium,
                select(['heading', 'activity description', 'met value']),
                filter((d) => !CompendiumBlacklist.includes(d.heading)),
                rename({
                    'heading': 'type',
                    'activity description': 'name', 
                    'met value': 'met'
                }),
            )

            console.log('finished parsing. starting writing...')
        
            const stream = fs.createWriteStream(join(__dirname, '../src/compendium/data/compendium.csv'))
            stream.write('placeholder,type,name,met\n')

            parsedCompendium.forEach(entry => {
                stream.write(`"pl","${entry.type}","${entry.name}",${entry.met},\n`)
            })

            stream.end(() => {
                console.log("Writing complete.")
                resolve()
            })
        })
        .on('error', (err) => {
            console.error("Error during CSV processing: ", err)
            reject(err)
        })
    })
}


// main script
async function main() {
    console.log("Generating compendium.csv....")

    const compendiumPath = join(__dirname, "../src/compendium/data/compendium.csv")

    if (fs.existsSync(compendiumPath)) {
        console.log("compendium.csv already exists.")
        rl.question("Override default action (exit) and regenerate? (Y/n)\n", async (answer) => {
            if (answer.toUpperCase() === 'Y') {
                console.log("Deleting current compendium.csv...")
                fs.rmSync(compendiumPath, { force: true })
                console.log("Deletion successful! Proceeding to generation...")
                rl.close()

                try {
                    await parseCompendium()
                    console.log("Generation complete! Exiting...")
                    exit(0)
                } catch (error) {
                    console.error("Generation failed:", error)
                    exit(1)
                }

            } else {
                console.log("Exiting without regenerating.")
                rl.close()
                exit(0)
            }
        })
    } else {
        console.log("compendium.csv does not exist, continuing to generate...")

        try {
            await parseCompendium()
            console.log("Generation complete! Exiting...")
            exit(0)
        } catch (error) {
            console.error("Generation failed:", error)
            exit(1)
        }
    }
}


// run script
main()


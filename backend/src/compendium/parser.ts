/**
 * Parser module for the 2024 Compendium of Physical Activities.
 * 
 * This module provides functionality to parse, transform, and query the Compendium
 * of Physical Activities dataset, which contains MET (Metabolic Equivalent of Task)
 * values for various physical activities.
 * ------------------
 * CREDIT: 
 * All data from the unparsed (2024_Adult_Compendium_MET.csv) and parsed csv (compendium.csv) 
 * located in the data folder were made and provided by the Compendium of Physical Activities 
 * (https://pacompendium.com/)
 * ------------------
 * Citation:
 * ------------------
 * Stephen D. Herrmann, Erik A. Willis, Barbara E. Ainsworth,
 * The 2024 Compendium of Physical Activities and its expansion,
 * Journal of Sport and Health Science,
 * Volume 13, Issue 1,
 * 2024,
 * Pages 1-2,
 * ISSN 2095-2546,
 * https://doi.org/10.1016/j.jshs.2023.09.008.
 * (https://www.sciencedirect.com/science/article/pii/S2095254623000935)
 * 
 * ------------------
 * 
 * @module compendium/parser
 */

import * as fs from 'fs'
import { join } from 'path'
import csv from 'csv-parser'
import memoize from 'just-memoize'
import { tidy, filter, select, groupBy, sort } from '@tidyjs/tidy'

export interface CompendiumEntry {
    placeholder: string
    type: string
    name: string
    met: string
}


const _readCompendium = memoize((): Promise<CompendiumEntry[]> => {
    return new Promise((resolve, reject) => {
        const compendium: CompendiumEntry[] = []

        fs.createReadStream(join(__dirname, 'data/compendium.csv'))
        .pipe(csv())
        .on('data', row => compendium.push(row))
        .on('end', () => {
            resolve(compendium)
        })
        .on('error', (error) => {
            reject(error)
        })
    })
}) 



/**
 * Retrieves all unique activity types from the activity compendium.
 * 
 * This function reads the compendium data, extracts the 'type' field from each entry,
 * and returns an array of all available activity types.
 * 
 * @returns {Promise<string[]>} An array of activity type strings.
 * @async
 */
export async function getTypes(): Promise<string[]> {
    const type_return: string[] = []
    const compendium = await _readCompendium()
    const types = tidy(compendium, select('type'))

    types.map(val => type_return.push(val.type))
    
    return type_return
}


/**
 * Extracts all activity names from the compendium.
 * 
 * This function reads the compendium data, selects only the 'name' field
 * from each entry, and returns an array containing all activity names.
 * 
 * @returns {Promise<string[]>} An array of activity names from the compendium
 * @async
 */
export async function getNames(): Promise<string[]> {
    const name_return: string[] = []
    const compendium = await _readCompendium()

    const names = tidy(compendium, select('name'), sort('name'))

    names.map(val => name_return.push(val.name))

    return name_return
}


/**
 * Retrieves exercise names filtered by the specified type from the compendium.
 * 
 * This function reads the exercise compendium data and returns a filtered and
 * grouped collection of exercises that match the specified type.
 * 
 * @param type - The exercise type to filter by (e.g., 'resistance', 'cardio')
 * @returns A Promise resolving to MET value specified from the given type and name
 * @async
 */
export async function getMET(type: string, name: string): Promise<null | string> {
    const compendium = await _readCompendium()

    try {        
        const [{ met }] = tidy(
            compendium,
            groupBy('met', [
                filter(d => d.type === type && d.name === name)
            ])
        )
    
        return met
    } catch (error) {
        return null
    }
}

/**
 * Retrieves the compendium data.
 * 
 * This function serves as a wrapper around the private `_readCompendium` function,
 * providing external access to the compendium data.
 * 
 * @returns The compendium data structure.
 * @async
 */
export async function getCompendium(): Promise<CompendiumEntry[]> {
    return await _readCompendium()
}

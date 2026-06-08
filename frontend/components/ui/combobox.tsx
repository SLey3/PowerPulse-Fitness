"use client"
 
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
  

interface Searchable {
    value: string
    label: string
    hoverLabel: string
}

type setValueDispatch = React.Dispatch<React.SetStateAction<string>>


export function ComboBox({ searchable_terms, defaultLabels, currentValue, setValue } : { searchable_terms: Searchable[], defaultLabels: string[], currentValue: string, setValue: setValueDispatch | Function }) {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover 
            open={open} 
            onOpenChange={setOpen} 
            modal={true}
        >
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between w-full overflow-hidden text-muted-foreground text-ellipsis"
                >
                    {currentValue
                        ? searchable_terms.find(term => term.value === currentValue)?.label
                        : defaultLabels[0]}
                    <ChevronsUpDown className="ml-2 opacity-50 size-4 shrink-0" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[80.5%] p-0 ml-5">
                <Command>
                    <CommandInput placeholder={defaultLabels[1]} className="h-9" />
                    <CommandList defaultValue={currentValue}>
                        <CommandEmpty>{defaultLabels[2]}</CommandEmpty>
                        <CommandGroup>
                            {searchable_terms.map((term) => (
                                <CommandItem
                                    key={term.value}
                                    value={term.value}
                                    onSelect={(curVal) => {
                                        setValue(curVal === currentValue ? "" : curVal)
                                        setOpen(false)
                                    }}
                                >
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div>
                                                <Check
                                                    className={cn(
                                                        "mr-2 size-4",
                                                        currentValue === term.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {term.label.toLowerCase()}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{term.hoverLabel}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
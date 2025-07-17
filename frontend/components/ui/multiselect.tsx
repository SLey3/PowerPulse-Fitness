/*
 * Credit: https://medium.com/@codeaprogram/building-a-custom-multi-select-dropdown-in-next-js-with-shadcn-ui-b4574089df27 
 */

"use client";

import * as React from "react";
import { X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";

type MultiSelectProps = {
  options: string[] | undefined;
  selected: string[] | undefined;
  onChange: (selected: string[]) => void;
  placeholder?: string;
};

/**
 * A multi-select component that allows the user to select multiple options from a list of options.
 * @param {string[] | undefined} options The list of options to select from.
 * @param {string[] | undefined} selected The currently selected options.
 * @param {(selected: string[]) => void} onChange A callback function that is called when the user selects or unselects an option.
 * @param {string} [placeholder="Select options..."] The placeholder text that is displayed when the user has not yet selected any options.
 */
export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select options...",
}: MultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const selectedItems = selected ?? [];
  let selectables: string[] = [];

  const handleUnselect = (option: string) => {
    onChange((selected as string[]).filter((s) => s !== option));
  };

  if (options && selected) {
      selectables = options.filter((option) => !selected.includes(option));
  }

  return (
    <Command className="w-1/2 overflow-visible bg-transparent">
      <div className="px-3 py-2 text-sm border rounded-md group border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selectedItems.map((option) => {
            return (
              <Badge key={option} variant="secondary">
                {option}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(option);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(option)}
                >
                  <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          <CommandInput
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className="flex-1 ml-2 bg-transparent outline-none placeholder:text-slate-300"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ? (
          <div className="absolute top-0 z-10 w-full border rounded-md shadow-md outline-none bg-popover text-popover-foreground animate-in">
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup className="h-full overflow-auto">
                {selectables.map((option) => {
                  return (
                    <CommandItem
                      key={option}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={() => {
                        setInputValue("");
                        onChange([...selectedItems, option]);
                      }}
                      className={"cursor-pointer"}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          onChange([...selectedItems, option]);
                          setInputValue("");
                        }
                      }}
                    >
                      {option}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </div>
        ) : null}
      </div>
    </Command>
  );
}

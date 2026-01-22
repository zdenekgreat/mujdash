"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  User,
  Smile,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@repo/ui/components/command"

export function SearchCommand() {
  const [open, setOpen] = React.useState(false)

  // Naslouchání klávesové zkratce Ctrl+K (nebo Cmd+K)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      {/* Nápověda v UI, aby uživatel věděl, že to existuje */}
      <button 
        onClick={() => setOpen(true)}
        className="text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-md border flex items-center gap-2 hover:bg-muted transition-colors"
      >
        <span>Hledat...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Napište příkaz nebo hledejte..." />
        <CommandList>
          <CommandEmpty>Žádné výsledky.</CommandEmpty>
          
          <CommandGroup heading="Návrhy">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Kalendář</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Hledat Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Kalkulačka</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Nastavení">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profil</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Fakturace</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Nastavení</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
import Link from "next/link"
import { LayoutDashboard, Users, Settings, LogOut, Database, Menu } from "lucide-react"
import { SearchCommand } from "./search-command"
import { Button } from "@repo/ui/components/button"
import { Sheet, SheetContent, SheetTrigger } from "@repo/ui/components/sheet"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 1. HLAVNÍ WRAPPER: Musí být w-full a min-h-screen
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      
      {/* SIDEBAR (Desktop) */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl font-bold">Enterprise App</span>
          </Link>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          <NavLinks />
        </nav>
      </aside>

      {/* 2. OBSAHOVÁ ČÁST: Musí mít sm:pl-64 (odskok od sidebaru) a HLAVNĚ w-full */}
      {/* !!! FIX: Přidáno w-full, aby se to roztáhlo doprava */}
      <div className="flex flex-col sm:pl-64 w-full transition-all">
        
        {/* HEADER */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          
          {/* Mobilní Trigger (Hamburger) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <span className="text-xl font-bold">Enterprise App</span>
                </Link>
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>

          {/* Horní lišta */}
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4 flex-1"> 
               {/* flex-1 zajistí, že searchbar využije místo */}
               <h1 className="text-lg font-semibold hidden md:block shrink-0">Dashboard</h1>
               <div className="w-full max-w-xl"> {/* Omezíme šířku hledání, ale ne layoutu */}
                 <SearchCommand />
               </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <span className="text-sm text-muted-foreground hidden md:block">admin@firma.cz</span>
              <LogOut className="h-5 w-5 text-muted-foreground cursor-pointer" />
            </div>
          </div>
        </header>
        
        {/* 3. MAIN OBSAH: Tady byl problém. */}
        {/* !!! FIX: Odstraněn 'grid', 'items-start'. Přidáno 'flex-1', 'w-full'. */}
        <main className="flex-1 space-y-4 p-4 sm:px-6 sm:py-0 w-full">
          {children}
        </main>
      </div>
    </div>
  )
}

function NavLinks() {
  return (
    <>
      <Link href="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
        <LayoutDashboard className="h-4 w-4" />
        Přehled
      </Link>
      
      <Link href="/dashboard/users" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
        <Users className="h-4 w-4" />
        Uživatelé
      </Link>

      <Link href="/dashboard/grid" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
        <Database className="h-4 w-4" />
        Big Data (Grid)
      </Link>

      <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
        <Settings className="h-4 w-4" />
        Nastavení
      </Link>
    </>
  )
}
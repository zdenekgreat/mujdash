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
    // HLAVNÍ KONTEJNER: w-full a min-h-screen jsou základ
    <div className="flex min-h-screen w-full bg-muted/40">
      
      {/* DESKTOP SIDEBAR: Fixní šířka 64 (256px) */}
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

      {/* PRAVÁ ČÁST (OBSAH): sm:pl-64 zajistí místo pro sidebar, w-full zbytek */}
      <div className="flex flex-1 flex-col sm:pl-64 w-full min-w-0">
        
        {/* HEADER */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6 w-full shrink-0">
          
          {/* Mobilní Hamburger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <nav className="flex flex-col gap-4 mt-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <span className="text-xl font-bold">Enterprise App</span>
                </Link>
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>

          {/* Vyhledávání a uživatel */}
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex-1 max-w-2xl"> 
               <SearchCommand />
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <span className="text-sm text-muted-foreground hidden md:block font-medium">
                admin@firma.cz
              </span>
              <LogOut className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
        </header>
        
        {/* MAIN AREA: w-full a flex-1 zajistí roztažení */}
        <main className="flex-1 w-full p-4 md:p-8">
          <div className="mx-auto w-full max-w-[1600px]"> {/* Max šířka pro velmi široké monitory, aby se to dalo číst */}
            {children}
          </div>
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
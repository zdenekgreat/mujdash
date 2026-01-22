import Link from "next/link"
import { LayoutDashboard, Users, Settings, LogOut, Database } from "lucide-react"
import { SearchCommand } from "./search-command"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-full bg-muted/40">
      {/* SIDEBAR */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl font-bold">Enterprise App</span>
          </Link>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
            <LayoutDashboard className="h-4 w-4" />
            Přehled
          </Link>
          
          <Link href="/dashboard/users" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <Users className="h-4 w-4" />
            Uživatelé
          </Link>

          {/* NOVÝ ODKAZ NA AG GRID */}
          <Link href="/dashboard/grid" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <Database className="h-4 w-4" />
            Big Data (Grid)
          </Link>

          <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <Settings className="h-4 w-4" />
            Nastavení
          </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="flex w-full items-center justify-between">
            
            {/* Levá část s nadpisem a vyhledáváním */}
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-semibold hidden md:block">Dashboard</h1>
              <SearchCommand />
            </div>

            {/* Pravá část s uživatelem */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">admin@firma.cz</span>
              <LogOut className="h-5 w-5 text-muted-foreground cursor-pointer" />
            </div>
          </div>
        </header>
        
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  )
}
import type { Metadata } from "next";
import "@repo/ui/globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Next.js Monorepo",
  description: "Powered by tRPC & Tailwind v4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // PŘIDÁNO: suppressHydrationWarning
    // To umlčí chybu způsobenou rozšířeními prohlížeče
    <html lang="cs" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
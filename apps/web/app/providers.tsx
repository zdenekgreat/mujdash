"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { trpc } from "@/lib/trpc";
import superjson from "superjson";

// Funkce pro určení URL API
function getBaseUrl() {
  if (typeof window !== "undefined") {
    // V prohlížeči použijeme relativní cestu (funguje automaticky všude)
    return "";
  }
  if (process.env.VERCEL_URL) {
    // Na serveru Vercelu použijeme jejich systémovou proměnnou
    return `https://${process.env.VERCEL_URL}`;
  }
  // Lokální vývoj
  return "http://localhost:3000";
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`, // <--- ZDE JE ZMĚNA (Dynamická URL)
          transformer: superjson,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
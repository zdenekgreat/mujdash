import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { z } from "zod";

// 1. Inicializace tRPC
const t = initTRPC.create({
  transformer: superjson, // Umožňuje posílat Date, Map, Set přes API
  errorFormatter({ shape }) {
    return shape;
  },
});

// 2. Exporty znovupoužitelných částí
export const router = t.router;
export const publicProcedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;
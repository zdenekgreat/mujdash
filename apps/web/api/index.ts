import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import superjson from 'superjson';
import { db } from "@repo/db";

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  // 1. Procedura pro získání dat
  getUsers: t.procedure.query(async () => {
    try {
      return await db.user.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      console.error("Chyba tRPC getUsers:", error);
      return [];
    }
  }),

  // 2. Procedura pro zápis dat (TATO CHYBĚLA V TYPECH)
  createUser: t.procedure
    .input(z.object({ 
      name: z.string().min(2), 
      email: z.string().email() 
    }))
    .mutation(async ({ input }) => {
      try {
        const user = await db.user.create({
          data: {
            name: input.name,
            email: input.email,
          },
        });
        return user;
      } catch (error) {
        console.error("Chyba tRPC createUser:", error);
        throw new Error("Nepodařilo se vytvořit uživatele v databázi.");
      }
    }),
});

// Export typu pro frontend
export type AppRouter = typeof appRouter;
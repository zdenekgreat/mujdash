import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import superjson from 'superjson';
import { db } from "@repo/db";

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  // Získání všech uživatelů z reálné databáze
  getUsers: t.procedure.query(async () => {
    try {
      return await db.user.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      console.error("Chyba při načítání uživatelů:", error);
      return [];
    }
  }),

  // Vytvoření uživatele v databázi
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
        console.error("Chyba při vytváření uživatele:", error);
        throw new Error("Nepodařilo se vytvořit uživatele.");
      }
    }),
});

export type AppRouter = typeof appRouter;
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import superjson from 'superjson';
import { db } from "@repo/db";

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  // Získání uživatelů
  getUsers: t.procedure.query(async () => {
    try {
      const users = await db.user.findMany({
        orderBy: { createdAt: 'desc' },
      });
      console.log("Načteno uživatelů z DB:", users.length);
      return users;
    } catch (e) {
      console.error("Chyba při getUsers:", e);
      throw new Error("DB Error");
    }
  }),

  // Vytvoření uživatele
  createUser: t.procedure
    .input(z.object({ 
      name: z.string().min(2), 
      email: z.string().email() 
    }))
    .mutation(async ({ input }) => {
      try {
        const newUser = await db.user.create({
          data: {
            name: input.name,
            email: input.email,
          },
        });
        console.log("Uživatel vytvořen:", newUser.id);
        return newUser;
      } catch (e) {
        console.error("Chyba při createUser:", e);
        throw new Error("Nepodařilo se uložit uživatele.");
      }
    }),
});

export type AppRouter = typeof appRouter;
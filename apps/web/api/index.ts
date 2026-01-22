import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import superjson from 'superjson';
import { db } from "@repo/db";

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  getUsers: t.procedure.query(async () => {
    try {
      return await db.user.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      console.error("Database fetch error:", error);
      return [];
    }
  }),

  createUser: t.procedure
    .input(z.object({ 
      name: z.string().min(2), 
      email: z.string().email() 
    }))
    .mutation(async ({ input }) => {
      try {
        return await db.user.create({
          data: {
            name: input.name,
            email: input.email,
          },
        });
      } catch (error) {
        console.error("Database insert error:", error);
        throw new Error("Nepodařilo se vytvořit uživatele.");
      }
    }),
});

export type AppRouter = typeof appRouter;
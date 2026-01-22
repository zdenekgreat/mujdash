import { publicProcedure, router } from "./trpc";
import { z } from "zod";

// Definice typu Uživatele (bude se hodit i na frontendu)
export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(["Admin", "User", "Guest"]),
  status: z.enum(["Active", "Pending", "Banned"]),
});

export type User = z.infer<typeof UserSchema>;

// Mock data
const mockUsers: User[] = [
  { id: "1", name: "Jan Novák", email: "jan@firma.cz", role: "Admin", status: "Active" },
  { id: "2", name: "Petr Svoboda", email: "petr@firma.cz", role: "User", status: "Pending" },
  { id: "3", name: "Eva Dvořáková", email: "eva@firma.cz", role: "User", status: "Active" },
  { id: "4", name: "Admin Root", email: "root@firma.cz", role: "Admin", status: "Banned" },
];

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Ahoj ${input.text} z tRPC Monorepa!`,
        time: new Date(),
      };
    }),

  // NOVÝ ENDPOINT PRO TABULKU
  getUsers: publicProcedure.query(() => {
    return mockUsers;
  }),
});

export type AppRouter = typeof appRouter;
// Import z vygenerované složky (už ne z node_modules)
import { PrismaClient } from "./generated-client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Inicializace klienta
export const db = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db

// Exportujeme typy (User atd.) pro zbytek aplikace
export * from "./generated-client"
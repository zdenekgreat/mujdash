import { PrismaClient } from "./generated-client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? new PrismaClient({
  log: ['error'], // Bude vypisovat jen skutečné chyby
})

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db

export * from "./generated-client"
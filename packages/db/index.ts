import { PrismaClient } from "@prisma/client"

// Kvůli Next.js a Fast Refreshu musíme zajistit, 
// aby se nevytvářelo příliš mnoho spojení k DB
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db

// Exportujeme vše z klienta, abychom měli přístup k typům (User, atd.)
export * from "@prisma/client"
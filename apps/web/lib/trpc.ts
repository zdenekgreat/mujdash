import { createTRPCReact } from '@trpc/react-query';
// Importujeme typ přímo z našeho nového routeru v apps/web
import type { AppRouter } from '../api'; 

export const trpc = createTRPCReact<AppRouter>();
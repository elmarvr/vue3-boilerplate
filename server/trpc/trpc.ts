import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { createContext } from "./context";

const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
});

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure;

export const router = t.router;
export const middleware = t.middleware;

import { createNuxtApiHandler } from "trpc-nuxt";
import { publicProcedure, router } from "../../../server/trpc/trpc";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { createContext } from "../../trpc/context";
import { greetingRouter } from "../../trpc/routers/greeting";

export const appRouter = router({
  greeting: greetingRouter,
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext,
});

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;

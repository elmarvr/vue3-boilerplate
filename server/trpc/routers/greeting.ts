import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const greetingRouter = router({
  greet: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input.name}!`,
      };
    }),
});

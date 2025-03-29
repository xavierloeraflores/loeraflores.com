import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const socialsTRPCRouter = createTRPCRouter({
  getTweets: publicProcedure.query(() => {
    return null;
  }),
});

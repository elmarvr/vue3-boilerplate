import { Config, connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

export const useDatabase = () => {
  const runtimeConfig = useRuntimeConfig();

  return drizzle(
    connect({
      host: runtimeConfig.host,
      username: runtimeConfig.username,
      password: runtimeConfig.password,
    }),
    {
      // schema,
    }
  );
};

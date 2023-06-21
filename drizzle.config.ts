import type { Config } from "drizzle-kit";
import "dotenv/config";

const connectionString = `mysql://${process.env["NUXT_DATABASE_USERNAME"]}:${process.env["NUXT_DATABASE_PASSWORD"]}@${process.env["NUXT_DATABASE_HOST"]}/online-menu?ssl={"rejectUnauthorized":true}`;

export default {
  schema: "./server/db/schema.ts",
  out: "./.drizzle",
  connectionString,
} satisfies Config;

import { seed } from "drizzle-seed";

import * as schema from "../database/schema/users";
import { drizzle } from "drizzle-orm/node-postgres";

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
  await seed(db, { userss: schema.users }).refine((f) => ({
    userss: {
      columns: {},
      count: 10,
    },
  }));
}

main();

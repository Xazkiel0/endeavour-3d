import { seed } from "drizzle-seed";

import * as schema from "../database/schema/users";
import { drizzle } from "drizzle-orm/node-postgres";

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
  await seed(db, { users: schema.users });
}

main();

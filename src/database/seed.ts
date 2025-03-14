import "dotenv/config";
import { reset, seed } from "drizzle-seed";

import * as schema from "./schema/users";
import { faker } from "@faker-js/faker";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

let db: NodePgDatabase<typeof schema> | null = null;

(async () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  db = drizzle(pool, {
    schema: {
      ...schema,
    },
  });
  console.log("Seeding database...");
  await seedAll();
})();

async function seedAll() {
  await reset(db, schema);

  await seed(db, schema).refine((f) => ({
    users: {
      count: 4,
      columns: {
        id: f.uuid(),
      },
      with: {
        profiles: 1,
      },
    },
    profiles: {
      columns: {
        bio: f.loremIpsum({ sentencesCount: 10 }),
      },
    },
    jobSpecs: {
      columns: {
        name: f.default({
          defaultValue: faker.helpers.arrayElement([
            "3D Animator",
            "2D Animator",
            "UI/UX Designer",
            "3D Artist",
            "2D Artist",
          ]),
        }),
      },
    },
    divisions: {
      columns: {
        name: f.default({
          defaultValue: faker.helpers.arrayElement([
            "3D Animator",
            "2D Animator",
            "UI/UX Designer",
            "3D Artist",
            "2D Artist",
          ]),
        }),
      },
    },
    jobLevels: {
      columns: {
        name: f.default({
          defaultValue: faker.helpers.arrayElement([
            "3D Animator",
            "2D Animator",
            "UI/UX Designer",
            "3D Artist",
            "2D Artist",
          ]),
        }),
      },
    },
  }));
}

seedAll();

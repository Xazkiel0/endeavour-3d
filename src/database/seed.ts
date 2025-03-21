import "dotenv/config";
import { reset, seed } from "drizzle-seed";

import * as schema from "./schema/users";
import { faker } from "@faker-js/faker";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

(async () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const db = drizzle(pool, {
    schema: {
      ...schema,
    },
  });
  console.log("Seeding database...");
  await seedAll(db);
})();

async function seedAll(db: NodePgDatabase<typeof schema>) {
  await reset(db, schema);

  await seed(db, schema, { seed: 123 }).refine((f) => ({
    users: {
      count: 3,
      columns: {
        id: f.uuid(),
        username: f.firstName(),
      },
      with: {
        profiles: 1,
      },
    },
    profiles: {
      columns: {
        img_profile: f.default({
          defaultValue: faker.image.avatar(),
        }),
        img_cover: f.default({
          defaultValue: faker.image.urlPicsumPhotos({
            width: 1920,
            height: 1080,
          }),
        }),
        bio: f.loremIpsum({ sentencesCount: 20 }),
        location: f.postcode(),
        first_journey: f.date(),
        banner_spotlight: f.default({
          defaultValue: faker.image.urlPicsumPhotos({
            width: 1920,
            height: 1080,
          }),
        }),
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

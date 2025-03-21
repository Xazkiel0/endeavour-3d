import { UserRoles } from "@/app/types";
import { date, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";

export const users = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  username: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  role: varchar({ length: 127 }).$type<UserRoles>().notNull(),
});

export const usersRelations = relations(users, ({ one }) => ({
  profile: one(profiles),
}));

export const profiles = pgTable("profiles", {
  id: uuid().primaryKey().defaultRandom(),
  fullname: varchar({ length: 255 }),
  date_of_birth: date().default("2000-01-01"),
  user_id: uuid("user_id")
    .default("00000000-0000-0000-0000-000000000000")
    .notNull(),
  img_profile: varchar({ length: 255 }),
  img_cover: varchar({ length: 255 }),
  bio: text(),
  location: varchar({ length: 255 }),
  first_journey: date().defaultNow(),
  banner_spotlight: varchar({ length: 255 }),
  // jobSpecs: uuid().references(() => jobSpecs.id),
  // jobLevel: uuid().references(() => jobLevels.id),
});

export const profilesRelations = relations(profiles, ({ one }) => ({
  users: one(users, { fields: [profiles.user_id], references: [users.id] }),
}));

export const divisions = pgTable("divisions", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
});

export const jobSpecs = pgTable("job_specs", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  // division: uuid().references(() => divisions.id),
});

export const jobLevels = pgTable("job_levels", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
});

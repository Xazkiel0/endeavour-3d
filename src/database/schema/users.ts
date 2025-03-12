import { UserRoles } from "@/app/types";
import { integer, pgTable, serial, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer("id").primaryKey(),
  username: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: varchar({ length: 127 }).notNull(),
});

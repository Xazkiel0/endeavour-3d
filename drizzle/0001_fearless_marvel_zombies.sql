ALTER TABLE "users" ALTER COLUMN "role" SET DATA TYPE varchar(127);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
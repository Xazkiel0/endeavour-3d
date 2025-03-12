CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar DEFAULT 'USER' NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);

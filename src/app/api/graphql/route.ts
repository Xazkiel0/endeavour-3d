import { UserRoles } from "@/app/types";
import { buildSchema } from "drizzle-graphql";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { randomUUID } from "crypto";
import { gql } from "graphql-tag";
import { db } from "@/database/db";

const users: {
  id: string;
  username: string;
  password: string;
  role?: UserRoles;
}[] = [
  { id: "1", username: "Alice", password: "password", role: UserRoles.ADMIN },
  { id: "2", username: "Bob", password: "password" },
];

const typeDefs = gql`
  enum UserRoles {
    ADMIN
    USER
  }
  type User {
    id: ID!
    username: String!
    role: UserRoles
    password: String
  }

  type Users {
    users: [User!]
  }

  type Query {
    hello: String
    users: [User!]
    user(id: ID!): User
  }
  type Mutation {
    createUser(username: String!, password: String): Users
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    users: () => users,
    user: (_, { id }: { id: string }) => users.find((user) => user.id === id),
  },
  Mutation: {
    createUser: (_, { username }: { username: string }) => {
      const id = randomUUID();
      users.push({ id, username, password: "password" });
      return { users };
    },
  },
};

const { schema } = buildSchema(db);

const server = new ApolloServer({
  schema,
  // typeDefs,
  // resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };

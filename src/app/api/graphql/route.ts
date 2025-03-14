import { buildSchema } from "drizzle-graphql";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { db } from "../../../database/db";
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
} from "graphql";
import { users } from "@/database/schema/users";

const { entities } = buildSchema(db);
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      users: entities.queries.users,
      user: entities.queries.usersSingle,
    },
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createUser: {
        type: new GraphQLList(new GraphQLNonNull(entities.types.UsersItem)),
        args: {
          where: {
            type: entities.inputs.UsersFilters,
          },
          data: {
            type: new GraphQLNonNull(entities.inputs.UsersInsertInput),
          },
        },
        resolve: async (_, { data }) => {
          const res = await db.insert(users).values(data).returning();
          return res;
        },
      },
    },
  }),
  types: [...Object.values(entities.types), ...Object.values(entities.inputs)],
});

const server = new ApolloServer({
  schema,

  // typeDefs,
  // resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };

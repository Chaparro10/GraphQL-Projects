

import express from "express";
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import {connectMongo} from "./database.js";
import userSchema from "./SchemaGraphQL/user.schema.js"
import userResolver from "./ResolverGraphQL/user.resolvers.js"
import productSchema from "./SchemaGraphQL/product.schema.js"
import productResolver from "./ResolverGraphQL/product.resolvers.js"


//combinar typeDefs y resolvers
const typeDefs=mergeTypeDefs([userSchema,productSchema]);
const resolvers = mergeResolvers([userResolver,productResolver]);


//crear el schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


connectMongo();

const server = new ApolloServer({
  typeDefs: schema,
  context:({req})=>{
    return {user:'ADMIN'}
  }
});
const app = express();
await server.start();
server.applyMiddleware({ app, path: "/graphql" });

app.listen(3000, () => {
  console.log(`🚀 Servidor en http://localhost:3000/graphql`);
});


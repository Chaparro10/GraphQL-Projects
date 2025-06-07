
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";





const typeDefs = `
type Query {
hello: String!
users:[User]
}

type User{
id: ID!
name: String!
email: String
password:String
rol:String
}

type Mutation {
createUser(input:UserInput):User
deleteUser(id:ID):User
updateUser(id:ID,input:UserInput):User
}

input UserInput {
name: String!
email: String
password:String
rol:String
}
`


export default makeExecutableSchema({
    typeDefs,
    resolvers
})
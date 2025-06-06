import { ApolloError, ApolloServer, gql } from "apollo-server";
import { v1 as uuid } from "uuid";

const personas = [
  {
    id: 1,
    nombre: "Pedro",
    edad: 25,
    direccion: {
      calle: "Calle falsa",
      numero: 123,
    },
  },
  {
    id: 2,
    nombre: "Juan",
    edad: 25,
    direccion: {
      calle: "Calle falsa",
      numero: 123,
    },
    tel: "1342",
  },
  {
    id: 3,
    nombre: "Maria",
    edad: 30,
    direccion: {
      calle: "Calle falsa",
      numero: 123,
    },
    tel: "1342",
  },
];

const typeDfs = gql`
  input DireccionInput {
    calle: String!
    numero: Int!
  }
  type Direccion {
    calle: String!
    numero: Int!
  }

  type Person {
    nombre: String!
    edad: Int!
    direccion: Direccion!
    tel: String
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
    findPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      nombre: String!
      edad: Int!
      tel: String
      direccion: DireccionInput!
    ): Person
  }
`;

const resolvers = {
  Query: {
    personCount: () => personas.length,
    allPersons: () => personas,
    findPerson: (root, args) =>
      personas.find((item) => item.nombre === args.name),
  },
  Mutation: {
    addPerson: (root, args) => {
      const person = { ...args, id: uuid() };
      personas.push(person);
      return person;
    },
  },
};

const server = new ApolloServer({
  typeDefs: typeDfs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Servidor escuchando en ${url}`);
});


# Informacion general de GraphQL
# ¿Qué es GraphQL?
GraphQL es un lenguaje de consulta para APIs desarrollado por Facebook. A diferencia de REST, donde haces múltiples endpoints para obtener datos, con GraphQL puedes obtener toda la información que necesitas en una sola petición.

🧠 Ventajas principales:
🔎 Solo pides los campos que necesitas.

🚀 Menos tráfico entre cliente y servidor.

📦 Las respuestas son predecibles y fáciles de tipar.

📊 Ideal para aplicaciones con múltiples frontends (web, móvil, etc).

# Funcionalidad
 # typeDefs (Type Definitions)
Aquí defines el esquema de tu API. Especificas los tipos de datos, las queries disponibles, las mutaciones, y cualquier tipo personalizado.

# Ejemplo
type User {
  _id: ID!
  name: String!
  email: String!
}

input CreateUserInput {
  name: String!
  email: String!
  password: String!
}

type Query {
  getUsers: [User]
  getUser(id: ID!): User
}

type Mutation {
  createUser(input: CreateUserInput!): User
  deleteUser(id: ID!): String
}

# Resolvers
Los resolvers son las funciones que ejecutan la lógica de las consultas (Query) y mutaciones (Mutation). Cada campo en tu schema debe tener un resolver que le diga cómo obtener o modificar los datos.
# Ejemplo
import UserModel from '../models/user.model.js';

export default {
  Query: {
    getUsers: async () => await UserModel.find(),
    getUser: async (_, { id }) => await UserModel.findById(id),
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const user = new UserModel(input);
      return await user.save();
    },
    deleteUser: async (_, { id }) => {
      await UserModel.findByIdAndDelete(id);
      return "Usuario eliminado";
    },
  },
};


# Ciclo de Ejecucion
El cliente hace una consulta o mutación (ej: createUser).

GraphQL valida la estructura con los typeDefs.

Si es válida, ejecuta el resolver correspondiente (Mutation.createUser).

El resolver interactúa con MongoDB (vía Mongoose).

La respuesta se envía de vuelta al cliente.

# ⚙️ ¿Qué es Apollo Server?
Apollo Server es una biblioteca para crear un servidor GraphQL en Node.js. Se integra fácilmente con Express, y te permite crear APIs eficientes, seguras y escalables.

🚀 Características de Apollo Server:
Integración simple con Express.

Soporte para middlewares como autenticación (JWT).

Documentación automática con Apollo Sandbox.

Compatible con herramientas como Apollo Client en el frontend.


# Informacion sobre el proyecto
# GraphQL API con Apollo Server y Express

Este proyecto implementa una API GraphQL utilizando:

- Apollo Server
- Express.js
- MongoDB
- Mongoose
- Estructura modular (Schemas, Resolvers)


# URL del Playground
-http://localhost:3000/graphql

# Arquitectura del Proyecto
Este proyecto sigue una estructura modular para mantener el código limpio y escalable:
src/
├── ResolverGraphQL/       # Lógica de cada consulta o mutación
│   └── user.resolvers.js
├── SchemaGraphQL/         # Tipado GraphQL (queries, mutations, inputs)
│   └── user.schema.js
├── models/                # Modelos de MongoDB (Mongoose)
│   └── user.model.js
├── database.js            # Conexión a MongoDB
└── index.js               # Inicialización de Apollo Server con Express





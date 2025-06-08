import { gql } from "graphql-tag";

const ProductTypeDefs  = gql`
type Query {
hello: String!
products:[Product]
}

type Product{
id: ID!
name: String!
price: Float
description:String
}

type Mutation {
createProduct(input:ProductInput):Product
deleteProduct(id:ID):Product
updateProduct(id:ID,input:ProductInput):Product
}

input ProductInput {
name: String!
price: Float
description:String
}
`

export default ProductTypeDefs;


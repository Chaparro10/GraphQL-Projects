

import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema  from "./schema.js";
import {connectMongo} from "./database.js";



const app = express();
connectMongo();

app.use('/graphql', graphqlHTTP({
    graphiql:true, //
    schema:schema,
    context:{
        user:"admin"
    }
}))


app.listen(3000, () => {
    console.log('Server on port 3000')
})


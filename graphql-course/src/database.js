


import mongoose from "mongoose";


export const connectMongo = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/mongodbgraphql', {
            useNewUrlParser: true,
        })
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Error connecting to MongoDB");
    }
}


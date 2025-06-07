

import mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    password: String,
    role: String,
})


export default model('User', userSchema)
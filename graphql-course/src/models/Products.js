import { model, Schema } from "mongoose"


const ProductSchema = new Schema({
    name:String,
    price:{
        type:Number
    },
    description:String
})

export default model('Product', ProductSchema)
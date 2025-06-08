
import Product from "../models/Products.js";
 const Userresolvers = {
    Query: {
        hello: (root, args, ctx) => {//recibe 3 parametros root=paso anterior, args=parametros , ctx= contexto
            console.log('ctx', ctx)
            return 'Hello XDXDXD'
        },
        products: async (root, args, ctx) => {
            return await Product.find()
        }
    },
    Mutation: {
        async createProduct(root, args) {
            console.log('parametros products', args)
            return await Product.create(args.input)
        },
        async deleteProduct(root, args) {
            return await Product.findByIdAndDelete(args.id)
        },
        async updateProduct(root, args) {
            return await Product.findByIdAndUpdate(args.id, args.input, { new: true })
        }
    }
}


export default Userresolvers;
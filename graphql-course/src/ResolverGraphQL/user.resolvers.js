



import User from "../models/User.js";
 const Userresolvers = {
    Query: {
        hello: (root, args, ctx) => {//recibe 3 parametros root=paso anterior, args=parametros , ctx= contexto
            console.log('ctx', ctx)
            return 'Hello XDXDXD'
        },
        users: async (root, args, ctx) => {
            return await User.find()
        }
    },
    Mutation: {
        async createUser(root, args) {
            console.log('parametros user', args)
            return await User.create(args.input)
        },
        async deleteUser(root, args) {
            return await User.findByIdAndDelete(args.id)
        },
        async updateUser(root, args) {
            return await User.findByIdAndUpdate(args.id, args.input, { new: true })
        }
    }
}


export default Userresolvers;
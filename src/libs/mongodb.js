import mongoose from "mongoose";
const {MONGODB_URI} = process.env

if (!MONGODB_URI){
    throw new Error('MONGODB_URI MUST BE DEFINED')
}


export const connectDB = async () => {
   const {connection} = await mongoose.connect (MONGODB_URI)
    try {
        if(connection.readyState === 1){
            console.log('conectado')
            return Promise.resolve(true)
       }
    } catch (error) {
        console.log(error)
        return Promise.reject(false)
        
    }

}
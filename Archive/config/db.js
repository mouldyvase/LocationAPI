import mongoose from "mongoose";



const connectDB = async() =>{
    try{
        console.log("db",process.env)
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("in",conn)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch (error){
        console.log(`Error:${error.message}`)
        process.exit(1)
    }
}

export default connectDB
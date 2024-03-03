import dotenv from 'dotenv';
dotenv.config();
//console.log(process.env)
import { locations } from './data/locations.js'
import SportLocation from './models/location.js'
import connectDB from "./config/db.js";

await connectDB()

export const importData = async() =>{
    try{

        await SportLocation.deleteMany()

        const sportsLocations = await SportLocation.insertMany(locations)
        console.log("created",sportsLocations)
        console.log('Data Imported!')
        process.exit(0)
    }catch(error){
        console.log(`${error}`)
        process.exit(1)
    }
}

const destroyData = async() =>{
    try{

        await workshop.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit(1)
    }catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}
import mongoose from "mongoose";
import {config} from "./config"

export const connectDb = async () => {
    try{
        await mongoose.connect(`${config.mongo.url}`, {
            retryWrites: true
        });
        console.log(`MongoDb connected successfully`);
    }catch(error){
        console.log(error);
        
    }
}
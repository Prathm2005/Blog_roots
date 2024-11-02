

import mongoose from "mongoose";

export const connectdb=async()=>{
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Data Base Connected");
    
}


import mongoose from "mongoose";

export const connectdb=async()=>{
    await mongoose.connect('mongodb+srv://prathmeshmal02:Prathm%402005@cluster0.lngen.mongodb.net/blogroots');

    console.log("Data Base Connected");
    
}
import mongoose from "mongoose";
const {Schema} = mongoose

const customerSchema = new Schema ({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    firstname:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }
},{
    timestamps:true
})

 export  default mongoose.model("Costumer",customerSchema)
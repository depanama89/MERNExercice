import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import costumerRoute from "./routes/costumer.route.js"
import cors from "cors"
const app = express()

dotenv.config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB)
        console.log("connected to mongo db")

    }catch(error){
        console.log(error)
    }
}

// app.use(cors({ origin: "h"}))
/***autoriser l'envoie des elements JSON */
app.use(express.json())
app.use("/backend/costumer",costumerRoute)
// app.post()



mongoose.connect(process.env.MONGODB)


app.listen(process.env.PORT,()=>{

    connect()
    console.log("Backend server is running")
   
})
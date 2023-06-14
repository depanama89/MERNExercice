
import Costumer from "../models/costumer.model.js"


export const getCostumer = async (req,res)=>{
    // const costumer = await Costumer.find()
    const costumer = await Costumer.find()    
    res.status(200).send(costumer)
    // res.send("it works very good 2")
}

export const getSearch=async(req,res)=>{
    
    /**
     * Possibilité de faire une recherche avec plusieurs parametre à la fois
     */
    const result= await Costumer.find({
        "$or":[
            {username:{$regex:req.params.key}},
            {firstname:{$regex: req.params.key}},
            {email: {$regex: req.params.key}}
        ]
    })
    res.status(201).send(result)
    

}

export const add = async (req,res)=>{
    try{
        const newAdd = new Costumer(req.body)
        await newAdd.save()
        res.status(201).send("User has been created")


    }catch(error){
        res.status(500).send("Something went wrong!")

    }
    
}
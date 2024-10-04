import CONTACT from "../Models/contact.Schema.js";

export const createContact = async(req,res) =>{
    try{
        const {name,email,phone,message} = req.body;
        const newContact = new CONTACT({name,email,phone,message});
        await newContact.save();
        res.status(201).json({message:"Contact created successfully"});
        }catch(err){
            console.log(error);
                     
            res.status(500).json({message:err.message});
            }
}
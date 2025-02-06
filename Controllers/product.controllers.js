import CONTACT from "../Models/contact.Schema.js";
import sendEmail from "../utils/email.js";

export const createQuery = async(req,res) =>{

    try{
        const {name,email,phone,message} = req.body;
        const newContact = new CONTACT({name,email,phone,message});
        await newContact.save();
        // send email 
        const message1 = `this is an draft of your message to Arunachalam \nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message} \n Note: This is a system generated email. please do not reply to this message.`
        const message2 = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
        sendEmail({
            email:newContact.email,
            subject: 'conformation mail from Arunachalam',
            message: message1
        })

        sendEmail({
            email:"arunachalam235200@gmail.com",
            subject: `person tried contacting ${name}`,
            message: message2
        })
        
        res.status(201).json({message:"Contact created successfully"});
        }catch(err){
            console.log(err);
                     
            res.status(500).json({message:err.message});
            }
}
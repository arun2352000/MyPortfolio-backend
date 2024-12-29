import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
            },
            email: {
                type: String,
                required: true,
                // unique: true,
                // match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address'],
                // index: true
            
            

                },
                phone: {
                    type: String,
                    required: true
                },
                message:{
                    type:String,
                    required:true,
               }
    }
);
const CONTACT = mongoose.model('CONTACT', contactSchema);
export default CONTACT
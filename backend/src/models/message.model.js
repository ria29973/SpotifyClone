import mongoose from "mongoose"; 

const messageSchema = new mongoose.Schema({
    sender: {
        type: String, 
        required: true
    }, 
    reciever: {
        type: String, 
        required: true
    }, 
    content: {
        type: String, 
        required: true
    }
}, {timestamps: true}); 
export const Message = mongoose.model("Message", messageSchema); 
import mongoose from "mongoose";
//create a schema
const contactSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        size:{
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    })
//create a modle  
const formdetails = mongoose.models.formdetails || mongoose.model('formdetails', contactSchema)

export default  formdetails;
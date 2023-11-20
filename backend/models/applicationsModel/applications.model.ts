import mongoose from "mongoose";


const applicationSchema = new mongoose.Schema({
// Applicant:{type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', 
//     },
    name:{type:String},
    email:{type:String},
    mobile:{type:String},
    linkedin:{type:String},
    resume:{type:String,},
    passport:{type:String,},
    yearsofexperience:{type:String,},
    portfolioworksample:{type:String},
    coverletter:{type:String,},
    attachments:{type:String,},
    video:{type:String,},
    noteAndFeedBack:[{type:mongoose.Schema.Types.ObjectId, ref:"Comment"}],
},
{
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
})


const Application =  mongoose.models.Application || mongoose.model('Application', applicationSchema);


export default Application
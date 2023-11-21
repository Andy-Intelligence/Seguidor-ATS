import mongoose from "mongoose";



const applicantSchema = new mongoose.Schema({
    id:{type:String,required:true},
    // id:{type:String,required:true},
    // username:{type:String,unique:true},
    // name:{type:String,},
    // image:{type:String},
    // bio:{type:String},
    // applicantInfo:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:'userInfo'
    //     }
    // ],
    // appliedJobs:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:'Job'
    //     }
    // ],
    // onboarded:{
    //     type:Boolean,
    //     default:false
    // }
},
{
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
})



const Applicant = mongoose.models.Applicant || mongoose.model('Applicant', applicantSchema)


export default Applicant;
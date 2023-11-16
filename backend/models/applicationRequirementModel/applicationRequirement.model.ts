import mongoose from "mongoose";


const applicationRequirementSchema = new mongoose.Schema({
name:{type:Boolean,},
email:{type:Boolean,},
mobile:{type:Boolean,},
linkedin:{type:Boolean,},
portfolioworksample:{type:Boolean},
},
{
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
})


const ApplicationRequirement = mongoose.models.ApplicationRequirement || mongoose.model('ApplicationRequirement', applicationRequirementSchema)


export default ApplicationRequirement
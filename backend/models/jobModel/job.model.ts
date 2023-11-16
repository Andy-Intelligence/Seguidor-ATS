import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({
author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
  jobTitle:{type:String,},
  jobDescription:{type:String,},
  teamDept:{type:String},
  location:{type:String},
  jobType:{type:String},
  yrsOfExp:{type:String},
  companyOverview:{type:String},
  qualifications:{type:String},
  deadline:{type:String},
  coverPhoto:{type:String,},
  applicationRequirement:{
      name: { type: Boolean },
      email: { type: Boolean },
      mobile: { type: Boolean },
      linkedin: { type: Boolean },
      portfolioworksample: { type: Boolean },
    },
  applications: [ {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Application', // Reference to the Applications model
  },],
  integrationContext: {type:String}, //"urn:li:organization:2414183"
  companyApplyUrl: {type:String},
  description: {type:String},
  employmentStatus: {type:String,enum:["PART_TIME","FULL_TIME"]},
  externalJobPostingId:{type:String}, //"1234" 
  listedAt:{type:Number,},   //1440716666
  jobPostingOperationType:{ type:String, default:"CREATE"},
  workplaceTypes:{type:String, enum: [
    "hybrid","remote","On-site"
  ]}
},
{
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
}
)


const Job = mongoose.models.Job || mongoose.model('Job', jobSchema)


export default Job
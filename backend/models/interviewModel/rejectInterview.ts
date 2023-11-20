// models/Interview.ts
import mongoose from 'mongoose';

// interface Interview extends Document {
//   applicant: string; // Reference to the applicant's ID
//   scheduledTime: Date;
//   status: 'scheduled' | 'completed' | 'canceled' | 'rejected';
//   googleMeetLink:string;
// }

const rejectInterviewSchema = new mongoose.Schema({
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Application', required: true },
  job:{type:mongoose.Schema.Types.ObjectId,ref:'Job',required:true},
  status: { type: String, enum: ['scheduled', 'completed', 'canceled','rejected'], default: 'rejected' },
  // googleMeetLink:{type:String},
});


const Interview = mongoose.models.RejectInterview || mongoose.model('RejectInterview', rejectInterviewSchema)


export default Interview
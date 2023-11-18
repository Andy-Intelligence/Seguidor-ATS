// models/Interview.ts
import mongoose from 'mongoose';

interface Interview extends Document {
  applicant: string; // Reference to the applicant's ID
  scheduledTime: Date;
  status: 'scheduled' | 'completed' | 'canceled' | 'rejected';
  googleMeetLink:string;
}

const interviewSchema = new mongoose.Schema({
  interviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Application', required: true },
  job:{type:mongoose.Schema.Types.ObjectId,ref:'Job',required:true},
  scheduledDate: { type: Date, },
  interviewStartTime: { type: String, },
  interviewEndTime: { type: String, },
  title:{type:String},
  description:{type:String},
  summary:{type:String},
  venue:{type:String},
  details:{type:String},
  inviteLink:{type:String},
  status: { type: String, enum: ['scheduled', 'completed', 'canceled','rejected'], default: 'scheduled' },
  // googleMeetLink:{type:String},
});


const Interview = mongoose.models.Interview || mongoose.model('Interview', interviewSchema)


export default Interview
// models/Interview.ts
import mongoose from 'mongoose';

interface Interview extends Document {
  applicant: string; // Reference to the applicant's ID
  scheduledTime: Date;
  status: 'scheduled' | 'completed' | 'canceled' | 'rejected';
  googleMeetLink:string;
}

const interviewSchema = new mongoose.Schema({
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
  scheduledTime: { type: Date, required: true },
  status: { type: String, enum: ['scheduled', 'completed', 'canceled','rejected'], default: 'scheduled' },
  googleMeetLink:{type:String},
});


const Interview = mongoose.models.Interview || mongoose.model('Interview', interviewSchema)


export default Interview
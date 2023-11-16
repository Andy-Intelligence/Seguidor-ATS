
import mongoose from 'mongoose'

const noteAndFeedBackSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  anonymous:{
    type:Boolean,
    default:false,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    // type: mongoose.Schema.Types.Mixed,
    // type: String,
    ref: 'User',
    // default:"Anonymous",
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
},{
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
});

// module.exports = mongoose.model('Message', messageSchema) ;



const Message = mongoose.models.Message || mongoose.model('NoteAndFeedback', noteAndFeedBackSchema)

export default Message;




   
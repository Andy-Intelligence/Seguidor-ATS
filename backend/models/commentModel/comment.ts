
import mongoose from 'mongoose'
import Application from '../applicationsModel/applications.model';


const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
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
    ref: 'Application',
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



const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema)

export default Comment;




   
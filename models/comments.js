const mongoose = require('mongoose');


// const commentSchema = new mongoose.Schema({
//   youtubeId: String,  
//   date: Date, 
//   promptString: String,
//   speaker: String,
//   speakerLocation: String,
//   storytitle: String,
//   referredBy: String,
//   email: String,
//   votes: {
//   	courageous: Number,
//   	inspiring: Number,
//   	unique: Number
//   }
// });


// Create database model
const Comments = mongoose.model('Comments', commentSchema);




module.exports = Comments;
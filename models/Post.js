const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
      title: { type: String, required: true },
      content: { type: String, required: true },
      author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
      },
      tags: [String],
      likes: {
            type: Number,
            default: 0
      }
      },
      { timestamp: true }
)

const Post = mongoose.model("Post", postSchema)
module.exports = Post
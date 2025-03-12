import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: { type: String, required: [true] },
  image: { type: String, required: [true] },
  description: { type: String, required: [true] },
  author: { type: String, required: [true] },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;

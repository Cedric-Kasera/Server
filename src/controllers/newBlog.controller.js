import Blog from "../models/blog.model.js";

const create = async (req, res) => {
  try {
    const { title, image, description, author } = req.body;
    const newBlog = await Blog.create(req.body);
    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default create;

import mongoose from 'mongoose';
import blog from '../models/blogModel.js';

exports.getAllBlogs = (req, res) => {
	// xTODO copied from note example
	blog.find({}, (err, blogs) => {
		if (err) {
			res.send(err);
		}

		res.json(blogs);
	});
};

exports.getBlog = (req, res) => {
	// xTODO copied from notes example
	node.findById(req.params.blogId, (err, blog) => {
		if (err) {
			res.send(err);
		}

		res.json(blog);
	});
};


exports.createBlog = (req, res) => {
	const newBlog = new blog(req.body);

	newBlog.save((err, blog) => {
		if (err) {
			res.send(err);
		}

		res.json(blog);

	});
};

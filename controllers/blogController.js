import mongoose from 'mongoose';
import blog from '../models/blogModel.js';

const getAllBlogs = (req, res) => {
	// blog.find({}, (err, blogs) => {
	//   if (err) {
	//     res.send(err);
	//   }
	//   
	//   console.log(res)
	//   res.json(blogs);
	// });
	
	blog.find({  })
		.then((data) => {
			console.log(data);
			res.json(data);
		})
		.catch((error) => {
			console.log(error);
		});
};


// const getBlog = (req, res) => {
//   // xTODO copied from notes example
//   node.findById(req.params.blogId, (err, blog) => {
//     if (err) {
//       res.send(err);
//     }
// 
//     res.json(blog);
//   });
// };
// 
// 
// const createBlog = (req, res) => {
//   const newBlog = new blog(req.body);
// 
//   newBlog.save((err, blog) => {
//     if (err) {
//       res.send(err);
//     }
// 
//     res.json(blog);
// 
//   });
// };

// export default {getAllBlogs, getBlog, createBlog};
export default {getAllBlogs};

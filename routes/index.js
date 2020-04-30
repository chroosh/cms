import blog from '../controllers/blogController.js';

// app.route().httpmethod()

export default (app) => {
	app.route('/api/blogs')
		.get(blog.getAllBlogs)		// get all blogs
		.post(blog.createBlog)		// creates a new blog

	// app.route('/blogs/:blogId')
	//   .get(blog.getBlog)				// get specific blog

}

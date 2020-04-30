import mongoose from 'mongoose';

// I thought this was a valid export - this works with nodemon but does not work with node
// import mongoose, { Schema } from 'mongoose';

const BlogScheme = new mongoose.Schema({
	markdown: {
		type: String,
		required: "where is the markdown"
	}
});

export default mongoose.model('Blog', BlogScheme);

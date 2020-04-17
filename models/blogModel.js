import mongoose, {
	Schema
} from 'mongoose';

const BlogScheme = new Schema({
	markdown: {
		type: String,
		required: "where is the markdown"
	}
});

export default mongoose.model('Blog', BlogScheme);

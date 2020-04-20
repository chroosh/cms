import React, {Component} from 'react';
import axios from 'axios';
import ListBlog from './ListBlog';
import './index.css';

class Blog extends Component {
  state = {
      blogs: []
  }

	componentDidMount() {
		this.getBlogs();
	}

	getBlogs = () => {
		axios.get('/blogs')
			.then(res => {
				if (res.data) {
					this.setState({
						blogs: res.data
					})
				}
			})
			.catch(err => console.log(err))
	}

	render() {
		let { blogs } = this.state;
		return (
			<div>
				<h1>my blogs</h1>
				{/* what was input supposed to be anyway? */}
				{/* <Input /> */}
				<ListBlog blogs={blogs}/>
			</div>
		)
	}
}

export default Blog;

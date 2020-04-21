import React, {Component} from 'react';
import axios from 'axios';
import {BlogTile} from './BlogTile';
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
			<div className="blogContainer">
				<b>My blogs</b>
				{/* maybe consider using css grid instead of just dot points */}
				<ul className="blog">
					{
						blogs && blogs.length > 0 ?
						(
							blogs.map(blog => {
								return (
									<li>
										<BlogTile text={blog.markdown}/>
									</li>
								)
							})
						) : (
							<>No blogs</>
						)
					}
				</ul>
			</div>
		)
	}
}

export default Blog;

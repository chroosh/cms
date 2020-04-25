import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {BlogTile} from './BlogTile';
import Divider from '@material-ui/core/Divider';
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
		return(
			<Fragment>
				{
					blogs && blogs.length > 0 ?
					(
						blogs.map(blog => {
							return (
								<Fragment>
									<BlogTile text={blog.markdown} />
									<Divider />
								</Fragment>
							)
						})
					) : (
						<>No blogs</>
					)
				}
			</Fragment>

		)
	}
}

export default Blog;

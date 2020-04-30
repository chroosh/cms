import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// local imports 
import BlogCard from './BlogCard';

const useStyles = makeStyles({
	blog: {
		padding: '0px',
	}
});

function Blog() {
	const classes = useStyles();
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		axios.get('/api/blogs')
			.then(res => {
				setBlogs(res.data);
			})
			.catch(err => console.log(err))

	}, [])

	return(
		<Container className={classes.blog}>
			{
				blogs && blogs.length > 0 ?
				(
					blogs.map(blog => {
						return (
							<BlogCard text={blog.markdown} />
						)
					})
				) : (
					<BlogCard text='# No blogs here' />
				)
			}
		</Container>
	)
};

export default Blog;

import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// local imports 
import {BlogTile} from './BlogTile';
import './index.css';


// use react state hooks to convert class into react hook function?

const useStyles = makeStyles((theme) => ({
	markdown: {
		...theme.typography.body2,
		padding: theme.spacing(3, 0),
	},
}));

function Blog() {
	const classes = useStyles();
	const [blogs, setBlogs] = useState([])

	axios.get('/blogs')
		.then(res => {
			setBlogs(res.data);
		})
		.catch(err => console.log(err))


	return(
		<Fragment>
			{
				blogs && blogs.length > 0 ?
				(
					blogs.map(blog => {
						return (
							<Fragment>
								<Divider />
								<BlogTile className={classes.markdown} text={blog.markdown} />
								
							</Fragment>
						)
					})
				) : (
					<>No blogs</>
				)
			}
		</Fragment>
	)
};

export default Blog;

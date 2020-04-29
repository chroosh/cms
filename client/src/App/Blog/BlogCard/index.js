import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import './index.css'

// const styles = (theme) => ({
//   listItem: {
//     marginTop: theme.spacing(1),
//   },
// });

// provides custom theming for below typography rules (used in markdown)
// the ThemeProvider allows us to control the styles of the Typography components using this
const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'Lato',
			'sans-serif',
		].join(','),

		h1: {
			fontSize: '20px',
			textDecoration: 'underline',
		},

		h2: {
			fontSize: '18px',
		},

		h3: {
			fontSize: '16px',
			fontWeight: '400',
		},

		h4: {
			fontSize: '16px',
		},
	},
});

// provides typography "rules" used by markdown-to-jsx
// - markdown to jsx creates jsx "html" tags - and this is done behind the scenes
// - but the way material-ui renders themed text is through Typography components
// so this function "overrides" the h1/h2/h3, etc html tags 
// (which we cant specify the theme of, unless through localised css) 
// to material ui Typography components
// variant: ' '  => applies the theme typography styles, above

const options = {
	overrides: {
		h1: { component: Typography, props: {	variant: 'h1' , gutterBottom: true}},
		h2: { component: Typography, props: {	variant: 'h2' , gutterBottom: true}},
		h3: { component: Typography, props: {	variant: 'h3' }},
		h4: { component: Typography, props: {	variant: 'h4' }},
		p: { component: Typography, props: {	variant: 'body1' }},
		a: { component: Link },
		
		},
};

const useStyles = makeStyles({
	card: {
		margin: '14px 16px',
		padding: '10px',
	},
});

function BlogCard(props) {
	const classes = useStyles();
	return (
		<Card className={classes.card} children=
		{
			<ThemeProvider theme={theme}>
				<ReactMarkdown options={options} children={props.text} />
			</ThemeProvider>
		}
		/>
	)
}

export default BlogCard;

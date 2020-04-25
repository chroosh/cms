import React, {Component} from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import './index.css'

class BlogTile extends Component {
  render() {
    return (
      <ReactMarkdown children={this.props.text} />
    );
  }
}

export {BlogTile};
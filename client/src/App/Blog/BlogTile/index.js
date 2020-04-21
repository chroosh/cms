import React, {Component} from 'react';
import './index.css'

class BlogTile extends Component {
  render() {
    return (
      <div className="blogtile">
        {this.props.text}
      </div>
    );
  }
}

export {BlogTile};
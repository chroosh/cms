import React, {Component} from 'react';

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
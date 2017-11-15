import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
  render () {
    return (
      <div className="List">
          <div className="Text">
        <a className="title" href ={this.props.post.url}><h3>{this.props.post.title}</h3></a>
        <p className= "author">{this.props.post.author}</p>
        </div>
        <img className= "image" src={this.props.post.thumbnail} atl="thumbnail"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(List);

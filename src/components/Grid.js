// The imports below are the files needed to make Grid.js work.
import React, { Component } from 'react';
import { connect } from 'react-redux';


class Grid extends Component {
    render() {
        return(
            <article>
                <section>
{/* This makes the image a link that goes to the url in the Reddit Data */}
                  <a href={this.props.post.url}><img className="Image" src={this.props.post.thumbnail}/></a>
                </section>
            </article>
        );
    }
}
function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Grid);

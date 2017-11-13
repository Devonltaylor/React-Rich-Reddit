// The imports below are the files needed to make App.js work.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from './Grid'
import List from './List'
// This chain of files makes the Router tags work.
import {
        BrowserRouter as Router,
        Route,
        Redirect,
        Switch,
        Link
        } from 'react-router-dom'

class App extends Component {
  render() {
/* The constanst below call the map function for each post view and cycles through the
the reddit data array and picks the peices of informaiton specified in each
component.*/

     const listItems = this.props.posts.map((post) => (
            <List post={post} key={post.author}/>
      ));

      const gridItems = this.props.posts.map((post) => (
             <Grid post={post} key={post.author}/>
      ));

// To get the links to work, they must be apart of the return f(x).
   return (
     <Router>
      <div className="App">
        <header>
            <h1>Reddit Posts</h1>

{/* The Links below set up the links to the different pages */}
            Which view would you like?: {' '}
              <Link to="/Grid">Grid View</Link>{' '}
              <Link to="/List">List View</Link>{' '}
              <Link to="/">Welcome Page</Link>
            </header>
          <div>

{/* The Switch below tells where to switch to when each link is clicked. */}
            <Switch>

{/* The Route below sets places the infrormation on the page in a div and uses the constant created
above to grab the data from the specified components*/}
            <Route exact path="/" render={() => (
              <div className="welcome">
                <h1>Welcome to Richmans Reddit</h1>
                <iframe src="https://giphy.com/gifs/l378dzpRIoeLUckRq/html5" className="giphy-embed"></iframe>
              </div>
              )}/>
              <Route path="/Grid" render={() => (
                <div className="Grid">
                  {gridItems}
                </div>
                )}/>
              <Route path="/List" render={() => (
                <div>
                  {listItems}
                </div>
                )}/>
              <Redirect to="/" />
            </Switch>
          </div>
      </div>
    </Router>
    );
  }
}
function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(App);

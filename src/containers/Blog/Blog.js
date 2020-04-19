import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import { Route, NavLink } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/" 
                            exact
                            activeClassName="my-active"
                            activeStyle={{ //inline styleing
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}
                            >Home</NavLink></li>
                            <li><NavLink to={{
                               // pathname: this.props.match.url + '/new-post', //to create Relative path
                               pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
<Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;
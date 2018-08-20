import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null,
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>  {
            this.setState({posts: response.data.splice(20,4)}); 
        });
    }   
    getPost = (post) => {
        this.setState({selectedPost: post});  
    }
    render () {        
        var posts = this.state.posts.map((post) => {
                    return <Post 
                        key={post.id} 
                        title={post.title} 
                        body={post.body} 
                        clicked={() => this.getPost(post)} />});
        return (
            <div>  
                <section className="Posts">
                    {posts}                    
                </section>
                <section>
                    <FullPost post={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost /> 
                </section>

            </div>
        );
    }
} 

export default Blog;
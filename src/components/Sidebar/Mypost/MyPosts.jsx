import React from 'react';
import './MyPosts.css';
import Post from './post/Post';

function MyPosts() {
    return (
<div className={'post_item'}>
    <div className={'item'}> <span>Hello</span></div>
    <div className={'item_3'}> <h1>News</h1> </div>
    <Post />
</div>);
}
export default MyPosts;
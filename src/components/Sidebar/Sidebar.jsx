import React from 'react';
import './Sidebar.css';
import MyPosts from './Mypost/MyPosts';

function Sidebar() {
    return (<div className={'sidebar'}>

        <MyPosts />
    </div>);
}
export default Sidebar;
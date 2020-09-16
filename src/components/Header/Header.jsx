import React from 'react';
import './Header.css';
function Header() {
    return (<header className={'header'}>
        <div className={'header_post1'}><h1> OOO "Sadovay ferma" </h1><button className={'Login'}>Login</button></div>
       <div className={'header_post'}> <a href={"/Sidebar"}><img src={'pubys.gif'}/></a></div>


    </header>);
}
export default Header;
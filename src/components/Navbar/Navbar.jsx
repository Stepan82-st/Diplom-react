import React from 'react';
import './Navbar.css';
function Navbar() {
    return (<nav className={'nav'}>
        <div className={'buttons'}><a>Выбрать товарищество</a></div>
        <div className={'buttons'}><a>Новости</a></div>
        <div className={'buttons'}><a>Игры</a></div>
        <div className={'buttons'}><a>Контакты</a></div>
        <div className={'buttons'}><a>Реклама</a></div>
    </nav>);
}
export default Navbar;
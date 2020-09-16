import React from 'react';
import './Navbar.css';
function Navbar() {
    return (

        <nav className={'nav'}>
        <div className={'buttons'}><a href={'/Nowsad'}>Выбрать товарищество</a></div>
        <div className={'buttons'}><a href={'/News'}>Новости</a></div>
        <div className={'buttons'}><a href={'/Game'}>Игры</a></div>
        <div className={'buttons'}><a href={"/Dialogs"}>Контакты</a></div>
        <div className={'buttons'}><a href={'/Reklama'}>Реклама</a></div>
    </nav>);
}
export default Navbar;
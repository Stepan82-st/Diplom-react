import React from 'react';
import './Reklama.css';


function Reklama() {
    return (<div className={'reklama'}>

            <div className={'Head'}>
            <a className={'button_item'} href={''}>Стройматериалы</a>
            <a className={'button_item'} href={''}>Техника</a>
            <a className={'button_item'} href={''}>Путешествия</a>
            </div>
            <div className={'content'}>
            </div>
        <div className={'content_item'}>
            <h2> Уважаемые садоводы-агородники СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</h2>
            <p> Все надоело, жизнь кажется скучной и однообразной!!! </p>
            <p> Милости просим
                Тур-агенство "Свет в конце тонеля" приглашает принять участие в захватывающем путешествии в
                волшебный город Нью-йорк</p>
            <p> Контактные телефоны 304 13 14, +375(29)707 13 14.</p>
        </div>

    </div>);
}
export default Reklama;
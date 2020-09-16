import React from 'react';
import './Nowsad.css';


function Nowsad() {
    return (
        <div className={'nowsad'}>
        <div className={'nowsad_item'}><h1>Список садовых товариществ</h1></div>
        <ul className={'menu-menu-1'} >
            <li className={'menu-item'}><a href={'/NewFerm'}>Комунарка</a></li>
            <li className={'menu-item'}><a href={''}>Передовик</a></li>
            <li className={'menu-item'}><a href={''}>Трактор</a></li>
            <li className={'menu-item'}><a href={''}>Птичь2</a></li>
        </ul>);
    </div> );
}
export default Nowsad;
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className={'app-wrapper'}>
        <header className={'header'}>
            <img src={'favicon.ico'} alt={logo}/>
            <h1> Sadovay ferma </h1>
        </header>
        <nav className={'nav'}>
          <div className={'buttons'}><a>Выбрать товарищество</a></div>
          <div className={'buttons'}><a>Новости</a></div>
          <div className={'buttons'}><a>Игры</a></div>
          <div className={'buttons'}><a>Контакты</a></div>
          <div className={'buttons'}><a>Реклама</a></div>
        </nav>
        <div className={'sidebar'}>
         </div>
         <div className={'footer'}><p>Наш девиз - "Умрем с лопатой в руках"</p></div>
    </div>

  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className={'app-wrapper'}>
        <Header />

        <nav className={'nav'}>
          <div className={'buttons'}><a>Выбрать товарищество</a></div>
          <div className={'buttons'}><a>Новости</a></div>
          <div className={'buttons'}><a>Игры</a></div>
          <div className={'buttons'}><a>Контакты</a></div>
          <div className={'buttons'}><a>Реклама</a></div>
        </nav>
        <div className={'sidebar'}>
            <h1 className={'item'}> Sadovay ferma </h1>
         </div>
         <div className={'footer'}>
             <p className={'item1'}>Наш девиз - "Умрем с лопатой в руках"</p>
             <p className={'item2'}>г.Минск 2020 ИИТ БГУИР</p>
         </div>
    </div>

  );
}

export default App;

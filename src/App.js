import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/news';
import Nowsad from './components/Nowsad/Nowsad';
import Reklama from './components/Reklama/Reklama';
import Game from './components/Game/Game';

import {BrowserRouter,Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
    <div className={'app-wrapper'}>
        <Header />
        <Navbar />
        <div className={"app-wrapper-content"}>
            <Route path={'/sidebar'} component={Sidebar} />
            <Route path={'/dialogs'} component={Dialogs} />
            <Route path={'/news'} component={News} />
            <Route path={'/nowsad'} component={Nowsad} />
            <Route path={'/reklama'} component={Reklama} />
            <Route path={'/game'} component={Game} />

        </div>
        <Footer />
    </div>
      </BrowserRouter>
  );
}

export default App;

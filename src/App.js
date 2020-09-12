import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={'app-wrapper'}>
        <Header />
        <Navbar />
        <Sidebar />
        <Footer />
    </div>
  );
}

export default App;

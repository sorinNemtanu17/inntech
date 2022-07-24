import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Services } from './components/Services';
import { HowTo } from './components/HowTo';
import { Users } from './components/Users';
import { Footer } from './components/Footer';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <HowTo />
      <Users />
      <Footer />
    </>
  );
}

export default App;

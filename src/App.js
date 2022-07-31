import { Navbar } from './components/Navbar';
import { HeaderGrid } from './components/HeaderGrid';
import { Services } from './components/Services';
import { HowTo } from './components/HowTo';
import { Users } from './components/Users';
import { Footer } from './components/Footer';
import React from 'react';

import './index.css';

function App() {
  return (
    <div className="transition-all">
      <Navbar />
      <HeaderGrid />
      <Services />
      <HowTo />
      {/* <Users /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Header from '../../components/Header';
import Profile from '../../components/Profile';
import Projects from '../Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;

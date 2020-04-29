import React from 'react';
import Title from './Title';
import About from './About';
import Projects from './Projects';
import Talks from './Talks';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <About />
      <Talks />
      <Projects />
    </div>
  );
}

export default App;

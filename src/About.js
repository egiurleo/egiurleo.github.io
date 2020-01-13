import React from 'react';
import data from './data';
import './App.css';

function About() {
  return(
    <div className="about">
      <p dangerouslySetInnerHTML={{ __html: data.about}}></p>
    </div>
  );
}

export default About;

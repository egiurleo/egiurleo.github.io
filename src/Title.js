import React from 'react';
import data from './data';
import './App.css';

function Title() {
  return(
    <div className="title">
      <h1>Emily Giurleo</h1>
      <div className="social">
          {data.social.map(social => (
            <a key={`social-${social.name}`} href={social.link} alt={social.name} target="_blank" rel="noopener noreferrer">
              {social.name}
            </a>
          ))}
      </div>
    </div>
  );
}

export default Title;

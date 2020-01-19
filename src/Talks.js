import React from 'react';
import data from './data';
import './App.css';

function Talks() {
  var renderTalk = talk => {
    return(
      <div className="talk">
        <div className="talk-title">
          <h3>
            <a href={talk.link} target="_blank" rel="noopener noreferrer">
              {talk.title}
            </a>
            <span className="conference">({talk.conference})</span>
          </h3>
        </div>
        <p className="description" dangerouslySetInnerHTML={{ __html: talk.description}}></p>
      </div>
    )
  }

  return(
    <div className="talks">
      <h2>Talks</h2>

        {data.talks
          .map(talk => (
            renderTalk(talk)
          )
        )}
    </div>
  );
}

export default Talks;

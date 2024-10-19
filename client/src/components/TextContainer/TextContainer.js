import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {/* <div>
      <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div> */}
    {users ? (
      <div>
        <h1>Friends-Chats</h1>
        <h4>Stay close, no matter the distance</h4>
        <h2>Friends Currently Chatting.....</h2>
        <div className="activeContainer">
          <h3>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                <img alt="Online Icon" src={onlineIcon} />
                <p>{name}</p>
              </div>
            ))}
          </h3>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
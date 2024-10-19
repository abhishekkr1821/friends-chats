import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">

    {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
    <div className="head">Room Id : {room}</div>
    <a href="/"><img src={closeIcon} alt="close icon" /></a>

  </div>
);

export default InfoBar;
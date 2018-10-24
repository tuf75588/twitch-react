import React from 'react';
import { css } from 'emotion';

const buttonDivStyles = css`
  text-align: center;
  margin-bottom: 1em;
`;
const buttonStyles = css`
  text-align: center;
  width: 100px;
  height: 25px;
  border: none;
  margin: 5px;
  cursor: pointer;
`;
const DisplayButtons = props => {
  return (
    <div className={buttonDivStyles}>
      <button className={buttonStyles} onClick={() => props.displayAllUsers()}>
        All
      </button>
      <button onClick={() => props.displayOnline()} className={buttonStyles}>
        Online
      </button>
      <button className={buttonStyles} onClick={() => props.displayOfflineUsers()}>
        Offline
      </button>
    </div>
  );
};

export default DisplayButtons;

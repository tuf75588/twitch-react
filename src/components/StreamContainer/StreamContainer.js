import React from 'react';
import { css } from 'emotion';

const logoDivContainer = css`
  display: flex;
  justify-content: flex-start;
`;

const listContainer = css`
  width: 900px;
  border: 1px solid white;
  margin: 0 auto;
  padding: 1em;
`;
const logoImageStyle = css`
  height: 200px;
  width: 200px;
`;

const nameHeaderStyle = css`
  padding-left: 30px;
  font-weight: 400;
`;

const StreamContainer = props => {
  const { streams, names } = props;
  const streamInfo = streams.map((user, indx) => {
    console.log(user);
    const name = user.name;
    const url = user.url;
    const logo = user.logo;
    const status = !user.status ? 'Offline' : 'Online';
    const category = user.game;
    return (
      <div
        className="streams"
        style={{ display: 'flex', padding: '0.5em', border: '1px solid white' }}
      >
        <img src={logo} className={logoImageStyle} />
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className={nameHeaderStyle}>{name}</h1>
            <h1 className={nameHeaderStyle}>
              {status === 'Online' ? 'Online: ' + category : 'Offline'}
            </h1>
          </div>
        </div>
      </div>
    );
  });

  return <div className={listContainer}>{streamInfo}</div>;
};

export default StreamContainer;

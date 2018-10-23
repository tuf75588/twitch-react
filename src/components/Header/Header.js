import React from 'react';
import { css } from 'emotion';
import logo from '../../utils/images/logo.png';
const headerStyle = css`
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  color: white;
  margin-top: 1em;
  font-size: 3rem;
  text-align: center;
`;
const logoStyle = css`
  height: 100px;
`;
const imgContainer = css`
  text-align: center;
  margin-bottom: 2em;
`;
const Header = props => {
  return (
    <>
      <h1 className={headerStyle}>{props.name}</h1>
      <div className={imgContainer}>
        <img src={logo} className={logoStyle} />
      </div>
    </>
  );
};

export default Header;

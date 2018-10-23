import React from 'react';
import { css } from 'emotion';
const StreamList = props => {
  const { names, data } = props;
  // const link = data['_links'].self;
  console.log(data);
  return (
    <div
      className={css`
        border: 0.5px solid white;
        padding-top: 30px;
        padding-left: 15px;
        padding-bottom: 30px;
        height: 25px;
        font-size: 1.25rem;
        display: flex;
      `}
    >
      {names}
    </div>
  );
};

export default StreamList;

import React from 'react';
import { css } from 'emotion';
import StreamList from '../StreamList/StreamList';

const listContainer = css`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 900px;

  border: 1px solid white;
  margin: 0 auto;
  padding: 1em;
`;
const StreamContainer = props => {
  const { streams, names } = props;

  const list = names.map((name, indx) => {
    return <StreamList names={name} key={indx} data={streams} />;
  });

  return <div className={listContainer}>{list}</div>;
};

export default StreamContainer;

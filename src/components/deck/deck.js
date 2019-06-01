import React from 'react';

import './deck.scss';

const Deck = props => {
  const deckType = [props.type];
  const classes = ['deck', ...deckType].join(' ');
  return <section className={classes}>{props.children}</section>;
};

export default Deck;

Deck.defaultProps = {
  children: [
    <div className="card">Card</div>,
    <div className="card">Card</div>,
    <div className="card">Card</div>,
  ],
};

import React from 'react';

import './button.scss';

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

export default Button;

Button.defaultProps = {
  handleClick: () => console.log('Button Clicked'),
  text: 'Click Me',
};

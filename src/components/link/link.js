import React from 'react';

import './link.scss';

const Link = props => {
  return (
    <a href={props.href} className={props.type} onClick={props.handleClick}>
      {props.text}
    </a>
  );
};

export default Link;

Link.defaultProps = {
  href: '#',
  type: 'primary',
  text: 'Click Me',
  handleClick: () => console.log('link clicked'),
};

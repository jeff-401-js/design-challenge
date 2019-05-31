import React from 'react';

import './drawer.scss';

const Drawer = props => {
  return <aside>{props.children}</aside>;
};

export default Drawer;

Drawer.defaultProps = {
  children: [<div>Stuff</div>],
};

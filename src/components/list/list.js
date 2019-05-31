import React from 'react';

import './list.scss';

const List = props => {
  return <ul>{props.children}</ul>;
};

export default List;

List.defaultProps = {
  children: [<li>Item 1</li>, <li>Item 2</li>, <li>Item 3</li>],
};

import React from 'react';

import './modal.scss';

const Modal = props => {
  return (
    <div className="modal-container">
      <div className="modal">
        <header>
          {props.title}
          <button onClick={props.close}>x</button>
        </header>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;

Modal.defaultProps = {
  title: 'My Modal',
  close: () => console.log('Close the modal...'),
  children: [<div>Content Here!</div>],
};

/**
*
* Modal
*
*/

import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';

// import styles from './styles.css';
const modalStyles = { overlay: { zIndex: 102 } };

class Modal extends React.Component { // eslint-disable-line
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  render() {
    const { isOpen, children, onClose } = this.props;

    return (
      <ReactModal
        style={modalStyles}
        onRequestClose={() => onClose()}
        shouldCloseOnOverlayClick
        isOpen={isOpen}
        onCancel={() => onClose()}
      >
        {children}
      </ReactModal>
    );
  }
}

export default Modal;

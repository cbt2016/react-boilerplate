/**
 *
 * ConfirmRemove
 *
 */

import React, { PropTypes } from 'react';
import Modal from '../Modal';
import {
  Button,
  InputGroup,
} from 'elemental';

// import styles from './styles.css';

const Section = InputGroup.Section;

function ConfirmRemove({ message, selected, submitRemove, cancelRemove }) {
  return (
    <Modal
      isOpen
      onClose={() => cancelRemove()}
    >
      <div>{message}</div>
      <InputGroup>
        <Section>
          <Button
            type="danger" size="sm"
            onClick={() => submitRemove(selected._id)}
          >Remove</Button>
        </Section>
        <Section>
          <Button size="sm" onClick={() => cancelRemove()}>Cancel</Button>
        </Section>
      </InputGroup>
    </Modal>
  );
}

ConfirmRemove.propTypes = {
  message: PropTypes.node.isRequired,
  selected: PropTypes.object.required,
  submitRemove: PropTypes.func.required,
  cancelRemove: PropTypes.func.required,
};

ConfirmRemove.defaultProps = {
  message: 'Are you sure?',
};

export default ConfirmRemove;

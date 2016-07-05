/**
 *
 * FilterGuideModal
 *
 */

import React, { PropTypes } from 'react';
import Modal from '../Modal';
import { Table } from 'elemental';
// import styles from './styles.css';

function FilterGuideModal(props) {
  return (
    <Modal isOpen onClose={() => props.closeFilterGuide()}>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Filter Field</th>
            <th>Compare</th>
            <th>Db Type</th>
          </tr>
        </thead>
        <tbody>
          {props.filterFields.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.filterField}</td>
              <td>{item.compareType}</td>
              <td>{item.dbType}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Modal>
  );
}

FilterGuideModal.propTypes = {
  filterFields: PropTypes.array.isRequired,
  closeFilterGuide: PropTypes.func.isRequired,
};

export default FilterGuideModal;

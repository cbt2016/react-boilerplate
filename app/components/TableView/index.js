/**
 *
 * TableView
 *
 */

import React, { PropTypes } from 'react';
import {
  Table,
  Button,
  InputGroup,
  Glyph,
} from 'elemental';
import reduce from 'lodash/reduce';

import styles from './styles.css';

const Section = InputGroup.Section;

class TableView extends React.Component { // eslint-disable-line
  static propTypes = {
    fields: PropTypes.array.isRequired,
    entities: PropTypes.object.isRequired,
    edit: PropTypes.func,
    remove: PropTypes.func,
  };

  render() {
    const { fields, entities, edit, remove } = this.props;
    // Calculate actions header width, return 2 if have both
    const hasActions = !!edit + !!remove;
    return (
      <Table className={styles.tableView}>
        <colgroup>
          <col width={30} />
          {fields.map(({ width }, i) => (
            <col key={i} width={width} />
          ))}
          {hasActions && <col width={50 * hasActions} />}
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            {fields.map(({ header }, i) => (
              <th key={i}>{header}</th>
            ))}
            {hasActions && (
              <th>Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {reduce(entities, (acc, entity, i) => [...acc, (
            <tr key={i}>
              <td>{(acc.length || 0) + 1}</td>
              {fields.map(({ name, format }, j) => (
                <td key={j}>
                  {format ? format(entity[name]) : entity[name]}
                </td>
              ))}
              <td>
                <InputGroup>
                  {!!edit && (
                    <Section>
                      <Button size="sm" onClick={() => edit(entity._id)}>
                        <Glyph icon="pencil" />
                      </Button>
                    </Section>
                  )}
                  {!!remove && (
                    <Section>
                      <Button size="sm" onClick={() => remove(entity._id)}>
                        <Glyph icon="trashcan" type="danger" />
                      </Button>
                    </Section>
                  )}
                </InputGroup>
              </td>
            </tr>
          )], [])}
        </tbody>
      </Table>
    );
  }
}

export default TableView;

/**
 *
 * LoadMore
 *
 */

import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';
import LoadingIndicator from 'components/LoadingIndicator';

import styles from './styles.css';

class LoadMore extends React.Component { // eslint-disable-line
  static propTypes = {
    isLoadingMore: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
    query: PropTypes.object.isRequired,
    loadMore: PropTypes.func.isRequired,
  };

  render() {
    const { isLoadingMore, hasMore, query, loadMore } = this.props;
    return (
      <div className={styles.loadMore}>
        {isLoadingMore && (
          <LoadingIndicator />
        )}
        {hasMore && (
          <Waypoint
            onEnter={() => loadMore({ ...query, page: query.page + 1 })}
          />
        )}
        {!hasMore && (
          <div style={{ textAlign: 'center' }}>
            There's has no more items to load
          </div>
        )}
      </div>
    );
  }
}

export default LoadMore;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = props => {
  return (
    <tr>
      <td className={styles.tableCell}>{props.type}</td>
      <td className={styles.tableCell}>{props.amount}</td>
      <td className={styles.tableCell}>{props.currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;

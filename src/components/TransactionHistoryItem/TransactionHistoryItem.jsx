import React from 'react';
import PropTypes from 'prop-types';
// import styles from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = props => {
  return (
    <tbody>
      <tr>
        <td>{props.type}</td>
        <td>{props.amount}</td>
        <td>{props.currency}</td>
      </tr>
    </tbody>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;

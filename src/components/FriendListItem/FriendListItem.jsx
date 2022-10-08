import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = props => {
  return (
    <li className={styles.item}>
      <span
        className={props.isOnline ? `${styles.online} ` : `${styles.offline}`}
      ></span>
      <img
        className={styles.avatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{props.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;

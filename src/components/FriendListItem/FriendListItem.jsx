import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = props => {
  return (
    <li className="item">
      <span className={props.isOnline ? 'online' : 'offline'}>
        {props.isOnline ? 'Online' : 'Offline'}
      </span>
      <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;

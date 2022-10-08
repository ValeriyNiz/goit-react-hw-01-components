import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = props => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={props.avatar}
          alt="User avatar"
          className={styles.avatar}
          width="100"
          height="100"
        />
        <span className={styles.name}>
          <p className={styles.descrMarg}>{props.username}</p>
        </span>
        <p className={styles.descrMarg}>{props.tag}</p>
        <p className={styles.descrMarg}>{props.location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{props.stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{props.stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

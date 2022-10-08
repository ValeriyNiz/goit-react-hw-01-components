import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = props => {
  return (
    <section className={styles.statistics}>
      {props.title ? <h2 className={styles.title}>{props.title}</h2> : null}
      <ul className={styles.statList}>
        {props.stats.map(element => {
          let randomColor = Math.floor(Math.random() * 16777215).toString(16);

          return (
            <li
              className={styles.item}
              key={element.id}
              style={{
                backgroundColor: '#' + `${randomColor}`,
                borderRadius: '5px',
              }}
            >
              <span className="label">{element.label}</span>
              <span className={styles.percentage}>{element.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;

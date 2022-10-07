import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = props => {
  return (
    <section className="statistics">
      {props.title ? <h2 className="title">{props.title}</h2> : null}
      <ul className="stat-list">
        {props.stats.map(element => {
          return (
            <li className="item" key={element.id}>
              <span className="label">{element.label}</span>
              <span className="percentage">{element.percentage}%</span>
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

import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.statisticsList}>
    <li className={s.statisticsItem}>
      {' '}
      Good: <span>{good}</span>
    </li>
    <li className={s.statisticsItem}>
      {' '}
      Neutral: <span>{neutral}</span>
    </li>
    <li className={s.statisticsItem}>
      {' '}
      Bad: <span>{bad}</span>
    </li>
    <li className={s.statisticsItem}>
      {' '}
      Total: <span>{total}</span>
    </li>
    <li className={s.statisticsItem}>
      {' '}
      PositivePercentag: <span>{positivePercentage}%</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

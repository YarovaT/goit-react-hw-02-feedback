import React from 'react';
import style from './Statistics.module.css';
import StatisticsItem from './StatisticItem';

const Statistics = ({ props, total, positivePercentage }) => (
  <ul className={style.statisticsList}>
    {Object.entries(props).map(([key, value], index) => {
      return (
        <li key={index} className={style.statisticsItem}>
          <StatisticsItem label={key} value={value} />
        </li>
      );
    })}
    <li className={style.statisticsItem}>total: {total}</li>
    <li className={style.statisticsItem}>
      positivePercentage: {positivePercentage}%
    </li>
  </ul>
);

export default Statistics;

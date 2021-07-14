import React from "react";
// import PropTypes from "prop-types";
import Section from "../Section/Section";
import s from "./Statistics.module.css";

class Statistics extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     good: 5,
  //     neutral: 0,
  //     bad: 0,
  //   };
  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Section title="Statistics">
        <ul className={s.statisticsList}>
          <li className={s.statisticsItem}>
            {" "}
            Good: <span>{this.state.good}</span>
          </li>
          <li className={s.statisticsItem}>
            {" "}
            Neutral: <span>{this.state.neutral}</span>
          </li>
          <li className={s.statisticsItem}>
            {" "}
            Bad: <span>{this.state.bad}</span>
          </li>
          <li className={s.statisticsItem}>
            {" "}
            Total: <span>0</span>
          </li>
          <li className={s.statisticsItem}>
            {" "}
            PositivePercentag: <span>0</span>
          </li>
        </ul>
      </Section>
    );
  }
}

// Statistics.propTypes = {
//   state: PropTypes.shape({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   }),
// };

export default Statistics;

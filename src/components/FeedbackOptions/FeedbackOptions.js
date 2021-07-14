import React from "react";
import Section from "../Section/Section";
import s from "./FeedbackOptions.module.css";

class FeedbackOptions extends React.Component {
  handleIncrement = () => {};

  handleDecrement = () => {};
  render() {
    return (
      <Section title="Please leave feedback">
        <ul className={s.buttonList}>
          <li>
            <button
              type="button"
              className={s.button}
              onClick={this.handleIncrement}
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              className={s.button}
              onClick={this.handleIncrement}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              type="button"
              className={s.button}
              onClick={this.handleIncrement}
            >
              Bad
            </button>
          </li>
        </ul>
      </Section>
    );
  }
}

export default FeedbackOptions;

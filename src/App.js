import React, { Component } from 'react';
import './App.css';
import Section from './components/Section/';
import FeedbackOptions from './components/FeedbackOptions/';
import Statistics from './components/Statistics/';
import Notification from './components/Notification/';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    let positivePercentage;

    if (good > 0) {
      positivePercentage = (good / total) * 100;
    } else positivePercentage = 0;

    return Math.round(positivePercentage);
  };

  onLeaveFeedback = event => {
    const name = event.target.name;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  getVisibleContacts = () => {
    return this.state;
  };

  render() {
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              props={this.state}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Section from 'components/Section/Section.jsx';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from 'components/Statistics/Statistics.jsx';
import Notification from 'components/Notification/Notification.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  };

  onLeaveFeedback = ({ target: { name } }) => {
    const newName = name.toLowerCase();
    this.setState(() => {
      return { [newName]: this.state[newName] + 1 };
    });
  };

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
export default App;

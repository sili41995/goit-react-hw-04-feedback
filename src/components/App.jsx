import { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

class App extends Component {
  static defaultProps = { step: 1, initialValue: 0 };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round(
      (100 / this.countTotalFeedback()) * this.state.good
    );

    return positiveFeedbackPercentage ? positiveFeedbackPercentage : 0;
  };

  getOptions = () => Object.keys(this.state);

  onLeaveFeedback = (key) => {
    this.setState((prevState) => ({ [key]: prevState[key] + this.props.step }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      <div style={{ padding: '16px' }}>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={this.getOptions()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message='There is no feedback' />
          )}
        </Section>
      </div>
    );
  }
}

App.propTypes = {
  step: PropTypes.number.isRequired,
  initialValue: PropTypes.number.isRequired,
};

export default App;

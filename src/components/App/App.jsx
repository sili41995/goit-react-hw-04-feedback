import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';
import css from 'components/App/App.styled';
import { useState } from 'react';

const { Container } = css;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacksTypes = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () =>
    Math.round((100 / countTotalFeedback()) * good);

  const addFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood((prevState) => prevState + 1);
        break;

      case 'neutral':
        setNeutral((prevState) => prevState + 1);
        break;

      case 'bad':
        setBad((prevState) => prevState + 1);
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={feedbacksTypes}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message='There is no feedback' />
        )}
      </Section>
    </Container>
  );
};

export default App;

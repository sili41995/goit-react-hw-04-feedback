import { useState } from 'react';
import PropTypes from 'prop-types';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

import React from 'react';
import countTotalFeedback from 'utils/countTotalFeedback';
import countPositiveFeedbackPercentage from 'utils/countPositiveFeedbackPercentage';
import getOptions from 'utils/getOptions';

const App = ({ initialValue = 0, step = 1 }) => {
  const [goodFeedback, setGoodFeedback] = useState(() => initialValue);
  const [neutralFeedback, setNeutralFeedback] = useState(() => initialValue);
  const [badFeedback, setBadFeedback] = useState(() => initialValue);

  const totalFeedback = countTotalFeedback(
    goodFeedback,
    neutralFeedback,
    badFeedback
  );

  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(
    totalFeedback,
    goodFeedback
  );

  const options = getOptions('good', 'neutral', 'bad');

  const onLeaveFeedback = (key) => {
    switch (key) {
      case 'good':
        setGoodFeedback((prevState) => prevState + step);
        break;

      case 'neutral':
        setNeutralFeedback((prevState) => prevState + step);
        break;

      case 'bad':
        setBadFeedback((prevState) => prevState + step);
        break;

      default:
        break;
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title='Statistics'>
        {totalFeedback ? (
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message='There is no feedback' />
        )}
      </Section>
    </div>
  );
};

App.propTypes = {
  step: PropTypes.number.isRequired,
  initialValue: PropTypes.number.isRequired,
};

export default App;

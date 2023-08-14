import PropTypes from 'prop-types';
import { FeedBack, List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <FeedBack>good: {good}</FeedBack>
      <FeedBack>neutral: {neutral}</FeedBack>
      <FeedBack>bad: {bad}</FeedBack>
      <FeedBack>total: {total}</FeedBack>
      <FeedBack>positive feedback: {positivePercentage}%</FeedBack>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

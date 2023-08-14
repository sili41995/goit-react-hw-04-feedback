import PropTypes from 'prop-types';
import { Container } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    {options.map((option) => (
      <button
        key={option}
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </button>
    ))}
  </Container>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

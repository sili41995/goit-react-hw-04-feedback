import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.styled';

const { List, Item, Button } = css;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <List>
      {keys.map((key) => (
        <Item key={key}>
          <Button
            type='button'
            onClick={() => {
              onLeaveFeedback(key);
            }}
          >
            {key}
          </Button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

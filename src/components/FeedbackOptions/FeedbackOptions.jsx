import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.styled';

const { List, Item, Button } = css;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option) => (
        <Item key={option}>
          <Button
            type='button'
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

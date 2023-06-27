import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.styled';

const { List, Item, Label } = css;

const Statistics = ({ total, positivePercentage, ...props }) => {
  const keys = Object.keys(props);

  return (
    <List>
      {keys.map((key) => (
        <Item key={key}>
          <Label>{key}</Label>: {props[key]}
        </Item>
      ))}
      <Item>
        <Label>total</Label>: {total}
      </Item>
      <Item>
        <Label>positivePercentage</Label>: {positivePercentage}%
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;

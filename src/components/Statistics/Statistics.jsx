import PropTypes from 'prop-types';
import { Item, List } from './Statistics.styled';

const Statistics = ({ feedback, total, positivePercentage }) => {
  return (
    <List>
      <Item type="good">
        <span>Good:</span> {feedback.good}
      </Item>
      <Item type="neutral">
        <span>Nuetral:</span> {feedback.neutral}
      </Item>
      <Item type="bad" last="">
        <span>Bad:</span> {feedback.bad}
      </Item>
      <Item>
        <span>Total:</span> {total}
      </Item>
      <Item>
        <span>Positive feedback:</span> {positivePercentage}%
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

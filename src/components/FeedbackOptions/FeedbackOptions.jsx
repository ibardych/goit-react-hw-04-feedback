import { PropTypes } from 'prop-types';
import { Button, ButtonsList } from '../Styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ButtonsList>
      {Object.keys(options).map(item => (
        <Button key={item} type={item} onClick={() => onLeaveFeedback(item)}>
          {item}
        </Button>
      ))}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default FeedbackOptions;

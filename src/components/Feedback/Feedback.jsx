import { useState } from 'react';
import { FEEDBACK_OPTIONS } from 'constants';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import { Button, ButtonsList } from '../Styled';
import { FeedbackStyled } from './Feedback.styled';

const defaultFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const leaveFeedback = item => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [item]: feedback[item] + 1,
    }));
  };

  const clearFeedback = () => {
    setFeedback({ ...defaultFeedback });
  };

  const total = Object.keys(FEEDBACK_OPTIONS).reduce(
    (total, option) => (total += feedback[option]),
    0
  );

  const positivePercentage =
    total !== 0 ? Math.ceil((100 * feedback.good) / total) : 0;

  return (
    <FeedbackStyled>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={FEEDBACK_OPTIONS}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            feedback={feedback}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback yet"></Notification>
        )}
      </Section>

      {total !== 0 && (
        <Section>
          <ButtonsList>
            <Button type="default" onClick={clearFeedback}>
              Clear feedback
            </Button>
          </ButtonsList>
        </Section>
      )}
    </FeedbackStyled>
  );
};

export default Feedback;

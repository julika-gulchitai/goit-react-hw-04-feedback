import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section';
import { Flex } from './Feedback/Feedback.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const buttonName = event.target.name;
    switch (buttonName) {
      case 'Good':
        setGood(prev => prev + 1);
        break;
      case 'Neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'Bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = total => {
    if (good > 0) return ((good * 100) / total).toFixed(1) + '%';
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);
  const arrFeedback = ['Good', 'Neutral', 'Bad'];
  return (
    <div>
      <Flex>
        <Section title="Please leave feadback">
          <FeedbackOptions options={arrFeedback} leaveFeedback={handleClick} />
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Flex>
    </div>
  );
};

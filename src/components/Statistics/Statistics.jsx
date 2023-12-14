import { StyledCounter } from 'components/Feedback/Feedback.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <>
      <StyledCounter>
        <div>
          Good: <span>{good}</span>
        </div>
        <div>
          Neutral: <span>{neutral}</span>
        </div>
        <div>
          Bad: <span>{bad}</span>
        </div>
        <div>
          Total: <span>{total}</span>
        </div>
        <div>
          Positive feedback: <span>{positivePercentage}</span>
        </div>
      </StyledCounter>
    </>
  );
};

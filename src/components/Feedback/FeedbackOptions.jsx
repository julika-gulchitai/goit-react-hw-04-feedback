import React from 'react';
import { ButtonContainer, StyledButton } from './Feedback.styled';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <ButtonContainer>
      {options.map(target => (
        <StyledButton
          key={crypto.randomUUID()}
          onClick={leaveFeedback}
          name={target}
        >
          {target}
        </StyledButton>
      ))}
    </ButtonContainer>
  );
};

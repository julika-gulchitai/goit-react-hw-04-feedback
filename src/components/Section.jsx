import React from 'react';
import { TitleStyled } from './Feedback/Feedback.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      {title && <TitleStyled>{title}</TitleStyled>}
      <div>{children}</div>
    </>
  );
};

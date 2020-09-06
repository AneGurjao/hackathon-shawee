import React from 'react';
import QuestionOne from './Q1';
import QuestionTwo from './Q2';
import QuestionThree from './Q3';
import QuestionFour from './Q4';
import QuestionFive from './Q5';
import QuestionSix from './Q6';
import QuestionSeven from './Q7';
import QuestionEight from './Q8';
import ButtonLink from '../../components/Button';
import { Container } from '@material-ui/core';
import * as S from '../../components/styled';

const Questions = () => {
  return (
    <Container>
      <S.Pagination>02/02</S.Pagination>
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
      <QuestionFour />
      <QuestionFive />
      <QuestionSix />
      <QuestionSeven />
      <QuestionEight />
      <ButtonLink textButton="Próximo" className="button-blue" />
    </Container>
  );
};

export default Questions;

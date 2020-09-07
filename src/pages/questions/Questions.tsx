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
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/img/arrow-left-brown.svg';

const Questions = () => {
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', height: '72px' }}>
        <Link to="/objetivo">
          <ArrowBack />
        </Link>
        <S.Pagination>
          <span>02/</span>02
        </S.Pagination>
      </div>
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
      <QuestionFour />
      <QuestionFive />
      <QuestionSix />
      <QuestionSeven />
      <QuestionEight />
      <ButtonLink
        textButton="Próximo"
        className="button-blue"
        href="/emprestimo/aprovado"
      />
    </Container>
  );
};

export default Questions;

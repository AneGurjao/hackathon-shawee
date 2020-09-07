import React from 'react';
import * as S from '../../components/styled';
import CheckboxComp from '../../components/Checkbox';

const QuestionSeven = () => {
  return (
    <>
      <S.Title>
        6. Nos últimos 90 dias você emprestou dinheiro de algum parente ou
        amigo?
      </S.Title>
      <CheckboxComp label="Sim" />
      <CheckboxComp label="Não" />
    </>
  );
};

export default QuestionSeven;

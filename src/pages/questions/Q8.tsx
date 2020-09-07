import React from 'react';
import * as S from '../../components/styled';
import CheckboxComp from '../../components/Checkbox';

const QuestionEight = () => {
  return (
    <>
      <div>
        <S.Title>
          7. Nos últimos 90 dias você emprestou o cartão de crédito de algum
          parente ou amigo?
        </S.Title>
        <CheckboxComp label="Sim" />
        <CheckboxComp label="Não" />
      </div>
    </>
  );
};

export default QuestionEight;

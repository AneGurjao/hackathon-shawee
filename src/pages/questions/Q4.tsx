import React from 'react';
import * as S from '../../components/styled';
import CheckboxComp from '../../components/Checkbox';

const QuestionFour = () => {
  return (
    <>
      <S.Title>
        4. Você é assinante de algum serviço de TV por assinatura ou streaming?
      </S.Title>

      <CheckboxComp label="Sim" />

      <CheckboxComp label="Não" />
    </>
  );
};

export default QuestionFour;

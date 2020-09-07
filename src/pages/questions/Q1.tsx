import React from 'react';
import * as S from '../../components/styled';
import CheckboxComp from '../../components/Checkbox';

const QuestionOne = () => {
  return (
    <>
      <S.Title>
        1. Qual grau mais alto de escolaridade que você concluiu?
      </S.Title>

      <CheckboxComp label="Ensino Fundamental" />
      <CheckboxComp label="Ensino médio" />
      <CheckboxComp label="Ensino superior" />
      <CheckboxComp label="Pós-graduação/Mestrado" />
    </>
  );
};

export default QuestionOne;

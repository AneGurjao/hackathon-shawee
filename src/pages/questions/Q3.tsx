import React from 'react';
import * as S from '../../components/styled';
import CheckboxComp from '../../components/Checkbox';

const QuestionThree = () => {
  return (
    <>
      <S.Title>3. Com que frequência você pede comida por delivery?</S.Title>
      <S.CustomSmall>(ex: ifood, rappi, uber eats, ou similares)</S.CustomSmall>

      <CheckboxComp label="Todos os dias" />
      <CheckboxComp label="Algumas vezes por semana" />
      <CheckboxComp label="Algumas vezes por mês" />
      <CheckboxComp label="Não costumo comprar comida por delivery" />
    </>
  );
};

export default QuestionThree;

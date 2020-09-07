import React from 'react';
import * as S from '../../components/styled';
import CheckboxComp from '../../components/Checkbox';

const QuestionSix = () => {
  return (
    <>
      <S.Title>
        5. Com que frequência você solicita transporte por aplicativo?
      </S.Title>
      <S.CustomSmall>
        (ex: uber, 99 taxi, easy taxi, ou similares)
      </S.CustomSmall>

      <CheckboxComp label="Todos os dias" />
      <CheckboxComp label="Algumas vezes por semana" />
      <CheckboxComp label="Algumas vezes por mês" />
      <CheckboxComp label="Não costumo solicitar transporte por aplicativos" />
    </>
  );
};

export default QuestionSix;

import React from 'react';
import * as S from '../../components/styled';
import CheckboxComp from '../../components/Checkbox';

const QuestionTwo = () => {
  return (
    <>
      <S.Title>2. O plano do seu celular é:</S.Title>
      <CheckboxComp
        label="Pré-pago"
        text="(a recarga é feita por meio de créditos)"
      />
      <CheckboxComp label="Controle" text="(fatura mensal com um valor fixo)" />
      <CheckboxComp
        label="Pós-pago"
        text="(fatura mensal de acordo com consumo)"
      />
      <CheckboxComp label="Não tenho celular" />
    </>
  );
};

export default QuestionTwo;

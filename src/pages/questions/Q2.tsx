import React from 'react';
import * as S from '../../components/styled';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const QuestionTwo = () => {
  return (
    <>
      <div>
        <S.Title>2. O plano do seu celular é:</S.Title>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Pré-pago"
          />
          <small>(a recarga é feita por meio de créditos)</small>
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Controle"
          />
          <small>(fatura mensal com um valor fixo)</small>
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Pós-pago"
          />
          <small>(fatura mensal de acordo com consumo)</small>
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Não tenho celular"
          />
        </RadioGroup>
      </div>
    </>
  );
};

export default QuestionTwo;

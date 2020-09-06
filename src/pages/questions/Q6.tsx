import React from 'react';
import * as S from '../../components/styled';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const QuestionSix = () => {
  return (
    <>
      <div>
        <S.Title>
          5. Com que frequência você solicita transporte por aplicativo?
        </S.Title>
        <small>(ex: uber, 99 taxi, easy taxi, ou similares)</small>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Todos os dias"
          />
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Algumas vezes por semana"
          />
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Algumas vezes por mês"
          />
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Não costumo solicitar transporte por aplicativos"
          />
        </RadioGroup>
      </div>
    </>
  );
};

export default QuestionSix;

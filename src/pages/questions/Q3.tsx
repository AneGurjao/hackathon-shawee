import React from 'react';
import * as S from '../../components/styled';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const QuestionThree = () => {
  return (
    <>
      <div>
        <S.Title>3. Com que frequência você pede comida por delivery?</S.Title>
        <small>(ex: ifood, rappi, uber eats, ou similares)</small>
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
            label="Não costumo comprar comida por delivery"
          />
        </RadioGroup>
      </div>
    </>
  );
};

export default QuestionThree;

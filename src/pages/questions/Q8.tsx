import React from 'react';
import * as S from '../../components/styled';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const QuestionEight = () => {
  return (
    <>
      <div>
        <S.Title>
          7. Nos últimos 90 dias você emprestou o cartão de crédito de algum
          parente ou amigo?
        </S.Title>
        <RadioGroup>
          <FormControlLabel value="terms" control={<Radio />} label="Sim" />
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel value="terms" control={<Radio />} label="Não" />
        </RadioGroup>
      </div>
    </>
  );
};

export default QuestionEight;

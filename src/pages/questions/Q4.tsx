import React from 'react';
import * as S from '../../components/styled';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const QuestionFour = () => {
  return (
    <>
      <div>
        <S.Title>
          4. Você é assinante de algum serviço de TV por assinatura ou
          streaming?
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

export default QuestionFour;

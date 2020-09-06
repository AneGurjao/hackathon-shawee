import React from 'react';
import * as S from '../../components/styled';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const QuestionOne = () => {
  return (
    <>
      <div>
        <S.Title>
          1. Qual grau mais alto de escolaridade que você concluiu?{' '}
        </S.Title>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Ensino Fundamental"
          />
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Ensino Médio"
          />
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Ensino Superior"
          />
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Pós-graduação/Mestrado"
          />
        </RadioGroup>
      </div>
    </>
  );
};

export default QuestionOne;

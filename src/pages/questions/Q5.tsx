import React from 'react';
import * as S from '../../components/styled';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const QuestionFive = () => {
  return (
    <>
      <div>
        <S.Title>4.1 Você é assinante de algum dos serviços abaixo?</S.Title>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="TV por assinatura"
          />
          <small>(ex: net, sky, claro tv ou similares)</small>
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Streaming de filmes e séries"
          />
          <small>(ex: netflix, amazon prime, globo play ou similares)</small>
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Streaming de música"
          />
          <small>(spotify, deezer, youtube music)</small>
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Utilizo esses serviços somente na versão grátis"
          />
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            value="terms"
            control={<Radio />}
            label="Não utilizo nenhum desses serviçoso"
          />
        </RadioGroup>
      </div>
    </>
  );
};

export default QuestionFive;

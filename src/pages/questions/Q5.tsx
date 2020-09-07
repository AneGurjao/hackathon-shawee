import React from 'react';
import * as S from '../../components/styled';
import CheckboxComp from '../../components/Checkbox';

const QuestionFive = () => {
  return (
    <>
      <S.Title>4.1 Você é assinante de algum dos serviços abaixo?</S.Title>
      <CheckboxComp
        label="TV por assinatura"
        text="(ex: net, sky, claro tv ou similares)"
      />
      <CheckboxComp
        label="Streaming de filmes e séries"
        text="(ex: netflix, amazon prime, globo play ou similares)"
      />
      <CheckboxComp
        label="Streaming de música"
        text="(spotify, deezer, youtube music)"
      />
      <CheckboxComp label="Utilizo esses serviços somente na versão grátis" />
      <CheckboxComp label="Não utilizo nenhum desses serviçoso" />
    </>
  );
};

export default QuestionFive;

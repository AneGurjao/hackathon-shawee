import React from 'react';
import ButtonLink from '../components/Button';
import * as S from '../components/styled';
import { Container } from '@material-ui/core';

const Goals = () => {
  return (
    <Container>
      <S.Pagination>01/02</S.Pagination>
      <S.Title>Qual o seu objetivo com o empréstimo?</S.Title>
      <div>
        <S.ButtonBackground className="buy">
          Quero fazer compras
        </S.ButtonBackground>
        <S.ButtonBackground className="accounts">
          Quero pagar contas
        </S.ButtonBackground>
        <S.ButtonBackground className="debts">
          Quero quitar minha dívidas
        </S.ButtonBackground>
      </div>
      <ButtonLink textButton="Continuar" className="button-blue" disabled />
      <ButtonLink textButton="Voltar" className="button-gray" href="/ " />
    </Container>
  );
};

export default Goals;

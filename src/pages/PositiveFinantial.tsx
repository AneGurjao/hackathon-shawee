import React from 'react';
import * as S from '../components/styled';
import CardLink from '../components/CardLink';
import ButtonLink from '../components/Button';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as ArrowUp } from '../assets/img/arrow-up-circle.svg';
import { ReactComponent as ArrowBack } from '../assets/img/arrow-left-brown.svg';
import { Link } from 'react-router-dom';

const PositiveFinancial = () => {
  return (
    <S.ContainerCustom>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="">
          <ArrowBack />
        </Link>
        <S.SmallCustom>Educação Financeira</S.SmallCustom>
      </div>
      <S.TitleFinancial>Fatores de Influência</S.TitleFinancial>
      <S.TypographyFinancialCustom>
        Saiba os principais aspectos que influênciam na sua pontuação para
        tomada de crédito.
      </S.TypographyFinancialCustom>
      <S.CardBckground className="bcg-green">
        <span>Parabéns!</span>
        <S.TextSmall>Neste momento sua pontuação está positiva.</S.TextSmall>
      </S.CardBckground>
      <div className="text-point">
        <ArrowUp />
        <Typography>Fatores que aumentam sua pontuação:</Typography>
      </div>
      <CardLink
        title="Grandes movimentações na sua conta Black."
        textSmall="Com isso você ainda ganha CashBack"
      />
      <CardLink title="Suas contas estão sendo pagas em dia" />
      <CardLink title="Você não possui dívidas em seu nome." />
      <CardLink title="Já solicitou outros empréstimos e pagou em dia." />
      <S.TypographyCustom>
        Quer saber mais dicas que melhoram sua pontuação?
      </S.TypographyCustom>
      <ButtonLink textButton="Leia o nosso blog" className="button-blue" />
    </S.ContainerCustom>
  );
};

export default PositiveFinancial;

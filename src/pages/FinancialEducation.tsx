import React from 'react';
import * as S from '../components/styled';
import CardLink from '../components/CardLink';
import ButtonLink from '../components/Button';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as ArrowDown } from '../assets/img/arrow-down-circle.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../assets/img/arrow-left-brown.svg';

const FinancialEducation = () => {
  return (
    <S.ContainerCustom>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <ArrowBack />
          </Link>
          <S.SmallCustom>Educação Financeira</S.SmallCustom>
        </div>
      </div>
      <S.TitleFinancial>Fatores de Influência</S.TitleFinancial>
      <S.TypographyFinancialCustom>
        Saiba os principais aspectos que influênciam na sua pontuação para
        tomada de crédito.
      </S.TypographyFinancialCustom>
      <S.CardBckground className="bcg-pink">
        <span>Ops!</span>
        <S.TextSmall>
          Sua pontuação ainda não é muito boa, e deve melhorar.
        </S.TextSmall>
      </S.CardBckground>
      <div className="text-point">
        <ArrowDown />
        <Typography>Fatores que diminuem sua pontuação:</Typography>
      </div>
      <CardLink
        title="Movimente mais a sua conta Black"
        textSmall="Com isso você ainda ganha CashBack"
      />
      <CardLink title="Negocie as suas dívidas e não fique negativo." />
      <CardLink title="Você não está pagando suas contas em dia." />
      <CardLink title="Você possui empréstimos em aberto. Finalize o pagamento." />
      <S.TypographyCustom>
        Quer saber mais dicas que melhoram sua pontuação?
      </S.TypographyCustom>
      <ButtonLink textButton="Leia o nosso blog" className="button-blue" />
    </S.ContainerCustom>
  );
};

export default FinancialEducation;

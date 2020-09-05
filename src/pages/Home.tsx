import React from 'react';
import { ReactComponent as Start } from '../assets/img/tela-inicial.svg';
import { ReactComponent as IconMoney } from '../assets/img/money.svg';
import * as S from '../components/styled';

function Home() {
  return (
    <S.Box>
      <Start className="img-home" />
      <S.Link href="/solicitacao">
        <IconMoney />
        <p className="text">
          Solicitar <br /> empréstimo
        </p>
      </S.Link>
    </S.Box>
  );
}

export default Home;

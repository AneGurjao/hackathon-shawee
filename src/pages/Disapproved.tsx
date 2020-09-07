import React from 'react';
import { Container } from '@material-ui/core';
import { Player } from '@lottiefiles/react-lottie-player';
import * as S from '../components/styled';
import ButtonLink from '../components/Button';

const Disapproved = () => {
  return (
    <Container style={{ display: 'table' }}>
      <S.ControlPlayer
        style={{
          height: '200px',
          display: 'table-cell',
          verticalAlign: 'middle',
        }}
      >
        <Player
          src="https://assets5.lottiefiles.com/packages/lf20_CrmSX7.json"
          background="transparent"
          speed={1.5}
          style={{ width: '200px', height: '200px' }}
          loop
          controls
          autoplay={true}
        ></Player>
        <S.TitleRequest>
          <span>Que triste!</span>
          <S.Request>Infelizmente seu empréstimo não foi aceito.</S.Request>
        </S.TitleRequest>
        <S.TypographyCustom>
          Pague suas contas em dia e movimente mais sua conta black. <br />{' '}
          Essas são algumas dicas que melhoram a sua pontuação. <br />
        </S.TypographyCustom>
        <div className="text-center" style={{ marginTop: '20px' }}>
          Quer saber mais?
        </div>
        <ButtonLink
          href="/educacao-financeira"
          textButton="Veja dicas de educação financeira"
          className="button-blue"
        />
      </S.ControlPlayer>
    </Container>
  );
};

export default Disapproved;

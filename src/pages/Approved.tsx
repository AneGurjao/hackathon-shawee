import React from 'react';
import { Container } from '@material-ui/core';
import { Player } from '@lottiefiles/react-lottie-player';
import * as S from '../components/styled';

const Approved = () => {
  return (
    <Container>
      <S.ControlPlayer>
        <Player
          src="https://assets6.lottiefiles.com/packages/lf20_E8O6Kf.json"
          background="transparent"
          speed={1.5}
          style={{ width: '300px', height: '300px' }}
          loop
          controls
          autoplay={true}
        ></Player>
      </S.ControlPlayer>
      <S.TitleRequest>
        <span>Uhull! </span>
        <S.Request>Seu empréstimo foi aceito.</S.Request>
      </S.TitleRequest>
      <S.TypographyCustom>
        Agora você pode conferir o andamento do seu empréstimo, seu limite e o
        status.
      </S.TypographyCustom>
    </Container>
  );
};

export default Approved;

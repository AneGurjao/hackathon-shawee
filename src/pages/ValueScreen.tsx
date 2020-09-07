import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import * as S from '../components/styled';
import { Link } from 'react-router-dom';
import ButtonLink from '../components/Button';
import { ReactComponent as ArrowBack } from '../assets/img/fe_arrow-left.svg';
import { mobileModel } from 'react-device-detect';
import api from '../api';

const ValueScreen = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [limit, setLimit] = useState<string>('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    });
  }, []);

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      api
        .get('limit', {
          headers: {
            token: 'abcd',
            latitude,
            longitude,
            phone: mobileModel,
          },
        })
        .then((response) => {
          const { limit_lending } = response.data;
          setLimit(limit_lending);
        });
    }
  }, [latitude, longitude]);

  return (
    <>
      <S.ScreenTop>
        <div className="align-top">
          <Link to="/">
            <ArrowBack />
          </Link>
          <Typography className="smallTop">Empréstimo</Typography>
        </div>
        <div className="value-available">
          <p>Limite disponível:</p>
          <div className="value">
            <small>R$</small>
            {limit}
          </div>
          <div className="loading">
            <div className="charge"></div>
          </div>
        </div>
        <div className="base-icons"></div>
      </S.ScreenTop>
      <Container
        style={{
          padding: '35px 16px 0px 16px',
          background: 'rgb(229 229 229 / 67%)',
        }}
      >
        <small>Próximas faturas de seu empréstimo:</small>
        <S.CardPay>
          <div className="value">R$300,00 </div>
          <div className="Due-date">
            <Typography>Vencimento</Typography>
            <span>10/10</span>
          </div>
          <div className="pay">Pagar agora</div>
        </S.CardPay>
        <Link to="/educacao-positiva">
          <S.CardBckground className="bcg-green">
            <span>Quer ter mais limite?</span>
            <br />
            <S.TextSmall>
              Veja nossas dicas de educação financeira e melhore a sua
              pontuação.
            </S.TextSmall>
          </S.CardBckground>
        </Link>
        <ButtonLink
          textButton="Voltar"
          href="/emprestimo/aprovado"
          className="button-blue"
        />
      </Container>
    </>
  );
};

export default ValueScreen;

import React, { useEffect, useState } from 'react';
import { Container, FormControlLabel, RadioGroup } from '@material-ui/core';
import * as S from '../components/styled';
import ButtonLink from '../components/Button';
import DialogTerms from '../components/DialogTerms';
import Radio from '@material-ui/core/Radio';
import api from '../api';

function Solicitation() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    api
      .get('user', {
        headers: {
          token: 'abcd',
        },
      })
      .then((response) => {
        const { name } = response.data;
        setUserName(name);
        console.log(name);
      });
  }, []);
  return (
    <Container>
      <S.Title>Estamos felizes em ter você por aqui, {userName}!</S.Title>
      <S.TypographyDefault>
        Para oferecermos a melhor oferta de empréstimo precisamos que você
        permita o nosso acesso aos seus dados.{' '}
      </S.TypographyDefault>
      <S.TypographyBlue>
        Não se preocupe, nosso sistema é totalmente seguro e com suas
        informações poderemos te ajudar mais.{' '}
      </S.TypographyBlue>
      <S.FormRadioGroup>
        <RadioGroup>
          <FormControlLabel value="terms" control={<Radio />} label="" />
        </RadioGroup>
        <DialogTerms />
      </S.FormRadioGroup>

      <ButtonLink
        textButton="Autorizar acesso aos meus dados"
        className="button-blue"
        disabled
      />
      <ButtonLink textButton="Cancelar" href="/" className="button-gray" />
    </Container>
  );
}

export default Solicitation;

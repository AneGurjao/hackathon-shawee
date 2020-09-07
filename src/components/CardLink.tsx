import React from 'react';
import Container from '@material-ui/core/Container';
import * as S from '../components/styled';
import { ReactComponent as ArrowRight } from '../assets/img/arrow-left.svg';

type IProps = {
  title: string;
  textSmall?: string;
  href?: string;
  src?: string;
};

const CardLink = ({ title, textSmall, src }: IProps) => {
  return (
    <Container>
      <S.CardCustom>
        <S.ButtonLink className="title-card">{title}</S.ButtonLink>
        <div style={{ textAlign: 'center', paddingTop: '5px' }}>
          <small>{textSmall}</small>
        </div>
        <ArrowRight />
      </S.CardCustom>
    </Container>
  );
};

export default CardLink;

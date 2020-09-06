import styled from 'styled-components';
import { Button, IconButton } from '@material-ui/core';
import CardBlck from '../assets/img/cartao-blck.svg';
import Buy from '../assets/img/img1.png';
import Accounts from '../assets/img/img2.png';
import Debts from '../assets/img/img3.png';

export const Box = styled.div`
  width: 100%;

  & .img-home {
    background-image: url(${CardBlck});
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 48vh;
  }

  & .list-icons {
    position: relative;
  }
  & .list-menu {
    position: absolute;
    bottom: 6px;
    border-top: 1px solid #eef0f3;
    padding-top: 8px;
    display: flex;
    align-items: center;
  }
`;

export const ControlPlayer = styled.div`
  height: 230px;
`;

export const Link = styled.a`
  text-decoration: none;
  display: block;
  width: 108px;
  height: 95px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;

  & img {
    width: 38px;
  }

  & .text {
    margin-top: 2px;
    font-size: 13px;
    text-align: center;
    line-height: 1.1;
  }
`;

export const MenuList = styled.div`
  display: block;
  text-align: center;

  & .text {
    margin: 0;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 500;
    color: #3e3e3e;
    letter-spacing: -0.03em;

    &:nth-child(3) {
      color: var(--blue);
    }
  }
`;

export const ButtonLink = styled(Button)`
  && {
    border-radius: 5px;
    width: 100%;
    height: 50px;
    text-transform: initial;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.055em;

    &.button-gray {
      color: var(--gray-medium);
      letter-spacing: -0.055em;
      font-size: 18px;
    }
    &.button-blue {
      background: var(--blue);
      color: var(--white);
      margin: 20px 0;
    }
  }
`;

export const ButtonCustom = styled(Button)`
  && {
    border: none;
    text-transform: initial;
    font-weight: normal;
    letter-spacing: -0.055em;
    font-size: 17px;
    text-decoration: underline;
    color: var(--black);
    padding: 5px 0;
  }
`;

export const ButtonBackground = styled(Button)`
  width: 340px;
  height: 94px;
  margin-bottom: 20px;
  text-transform: initial;
  color: var(--white);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.055em;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  & .MuiButton-label {
    z-index: 5;
  }
  & .MuiTouchRipple-root {
    background-color: rgba(12, 12, 12, 0.5);
    z-index: 2;
  }

  &.buy {
    background-image: url(${Buy});
  }
  &.accounts {
    background-image: url(${Accounts});
  }

  &.debts {
    background-image: url(${Debts});
  }
`;

export const Title = styled.h5`
  font-size: 29px;
  font-weight: 300;
  letter-spacing: -0.01em;
  text-align: center;
  font-style: normal;
  color: var(--black-default);
  margin: 60px 20px;
  line-height: 30px;
`;

export const TypographyBlue = styled.p`
  && {
    color: var(--blue);
    font-weight: 600;
    text-align: center;
    font-size: 19px;
    width: 70%;
    margin: 40px auto;
  }
`;

export const TypographyDefault = styled.p`
  && {
    font-weight: 300;
    font-size: 18px;
    text-align: center;
    margin: 42px;
  }
`;

export const TextFieldCustom = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 193.19%;
`;

export const FormRadioGroup = styled.div`
  display: flex;
  margin: 20px 40px;

  & .PrivateRadioButtonIcon-checked-7 {
    color: var(--green);
  }

  & .MuiRadio-colorSecondary.Mui-checked {
    color: transparent;
  }

  & .MuiFormControlLabel-root {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const TitleRequest = styled.h4`
  font-size: 37px;
  font-weight: bold;
  text-align: center;
  letter-spacing: -0.03em;
  margin: 35px;

  & span {
    color: var(--black-default);
  }
`;

export const IconButtonClose = styled(IconButton)`
  & .MuiIconButton-label {
    justify-content: flex-end;
  }
`;

export const Request = styled(TitleRequest)`
  && {
    color: var(--blue);
    margin: 0;
    line-height: 34px;
  }
`;

export const TypographyCustom = styled.p`
  font-weight: 300;
  font-size: 19px;
  text-align: center;
  letter-spacing: -0.01em;
  width: 73%;
  margin: 30px auto;
  font-style: normal;
  color: var(--black-default);
  line-height: 24px;
`;

export const TitleCustom = styled(TypographyCustom)`
  margin: 0 auto;
`;

export const Pagination = styled.div`
  color: var(--blue);
`;

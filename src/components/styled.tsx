import styled from 'styled-components';
import { Button, IconButton, Card, Container } from '@material-ui/core';
import CardBlck from '../assets/img/cartao-blck.svg';
import BaseIcons from '../assets/img/bcg-icons.svg';
import TopImage from '../assets/img/bcg.svg';
import Buy from '../assets/img/img1.png';
import Accounts from '../assets/img/img2.png';
import Debts from '../assets/img/img3.png';

export const ContainerCustom = styled(Container)`
  && {
    background: rgba(229, 229, 229, 0.44);

    & .text-point {
      display: flex;
      margin: 18px 0px;
      justify-content: center;
      color: var(--black);
      letter-spacing: -0.02em;
    }
  }
`;

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

  & .text-center {
    font-weight: 300;
    font-size: 19px;
    text-align: center;
    letter-spacing: -0.01em;
    color: var(--black-default);
    line-height: 24px;
  }
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

export const TitleFinancial = styled(Title)`
  margin: 6px 0;
  text-align: left;
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
  font-size: 34px;
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

export const CardBckground = styled.div`
  color: var(--white);
  font-size: 16px;
  letter-spacing: -0.03em;
  border-radius: 6px;
  padding: 12px 49px;

  & span {
    font-weight: 600;
  }

  &.bcg-green {
    background: linear-gradient(94.12deg, #006583 -20.61%, #61b948 100%);
  }

  &.bcg-pink {
    background: linear-gradient(94.12deg, #006583 -20.61%, #e01653 100%);
  }
`;

export const ScreenTop = styled.div`
  background-image: url(${TopImage});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 45vh;
  position: relative;
  text-align: center;

  & .align-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    & a {
      & svg {
        width: 31px;
        height: 31px;
      }
    }
    & svg {
      width: 64px;
      height: 64px;
    }
  }

  & .smallTop {
    color: var(--white);
    width: 45px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  & .base-icons {
    background-image: url(${BaseIcons});
    background-position: right;
    background-repeat: no-repeat;
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: -30px;
    right: 0px;
  }

  & .value-available {
    p {
      color: var(--white);
      opacity: 0.5;
      margin-bottom: 0;
    }
  }

  & .value {
    color: var(--white);
    font-size: 50px;
    font-weight: bold;
    letter-spacing: -0.03em;

    & small {
      font-size: 13px;
    }
  }

  & .loading {
    width: 290px;
    height: 5px;
    margin: 12px auto 0px auto;
    border-radius: 10px;
    background: #016c8b;

    & .charge {
      background: linear-gradient(90deg, #2cc0ec 2.92%, #64b83d 96.67%);
      width: 150px;
      height: 5px;
      border-radius: 10px;
    }
  }
`;

export const CardPay = styled(Card)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 84px;
    align-items: center;
    border-radius: 6px;
    margin: 15px 0;

    & .value {
      font-weight: bold;
      letter-spacing: -0.03em;
      font-size: 18px;
    }

    & .pay {
      text-decoration: underline;
      font-size: 14px;
    }

    & .Due-date {
      text-align: center;

      & .MuiTypography-root {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 13px;
      }

      & span {
        color: var(--blue);
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
`;

export const TextSmall = styled.div`
  font-weight: 300;
  font-size: 17px;
  line-height: 1.2;
`;

export const SmallCustom = styled.p`
  color: var(--gray-medium);
  text-align: center;
  font-size: 14px;
  padding-top: 15px;
  margin-bottom: 35px;
  padding-left: 82px;
`;

export const TypographyFinancialCustom = styled.div`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.03em;
  color: var(--black);
  margin-bottom: 30px;
`;

export const CardCustom = styled(Card)`
  && {
    height: 80px;
    margin: 15px 0;
    position: relative;

    & .title-card {
      padding-top: 30px;

      & .MuiButton-label {
        width: 55%;
        margin: 0 auto;
        line-height: 1;
      }
    }

    & svg {
      position: absolute;
      right: 12px;
      top: 30px;
    }
  }
`;

import styled from 'styled-components';
import { Button, IconButton } from '@material-ui/core';

export const Box = styled.div`
  width: 100%;

  & .img-home {
    width: 100%;
    height: auto;
    z-index: 0;
    overflow: hidden;
  }
`;

export const ControlPlayer = styled.div`
  height: 230px;
`;

export const Link = styled.a`
  text-decoration: none;
  position: absolute;
  bottom: 43px;
  right: 0;
  z-index: 99999999;
  width: 108px;
  height: 106px;
  text-align: center;
  overflow: hidden;

  & .text {
    margin-top: 2px;
    font-size: 12px;
    text-align: center;
    line-height: 1.1;
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

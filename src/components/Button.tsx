import React from 'react';
import * as S from './styled';

type IProps = {
  textButton: string;
  className?: string;
  href?: string;
  onClick?: string;
  disabled?: boolean;
};

function ButtonLink({ className, href, textButton }: IProps) {
  return (
    <S.ButtonLink href={href} className={className}>
      {textButton}
    </S.ButtonLink>
  );
}

export default ButtonLink;

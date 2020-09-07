import React from 'react';
import * as S from './styled';

type IProps = {
  textButton: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
};

function ButtonLink({
  className,
  href,
  textButton,
  onClick,
  disabled,
}: IProps) {
  return (
    <S.ButtonLink
      href={href}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {textButton}
    </S.ButtonLink>
  );
}

export default ButtonLink;

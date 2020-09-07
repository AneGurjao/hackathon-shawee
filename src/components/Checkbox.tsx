import React from 'react';
import * as S from '../components/styled';
import { Checkbox } from '@material-ui/core';

type IProps = {
  label: string;
  text?: string;
};

const CheckboxComp = ({ label, text }: IProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <S.ControlCheckbox>
        <S.FormControlLabelCustom
          control={<Checkbox checked={checked} onChange={handleChange} />}
          label={label}
        />
        <div className="small">{text}</div>
      </S.ControlCheckbox>
    </>
  );
};

export default CheckboxComp;

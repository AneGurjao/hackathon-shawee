import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { ReactComponent as IconClose } from '../assets/img/icon_close.svg';
import * as S from '../components/styled';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogTerms() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <S.ButtonCustom
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Leia e aceite os termos de uso.
      </S.ButtonCustom>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <S.IconButtonClose aria-label="close" onClick={handleClose}>
          <IconClose />
        </S.IconButtonClose>
        <S.TitleCustom>Termos de Uso</S.TitleCustom>
        <DialogContent>
          <S.TypographyBlue>
            Role até o final para ler e aceite os temos.
          </S.TypographyBlue>
          <S.TextFieldCustom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui sed
            aliquet volutpat integer. Dictum sit ultricies pharetra velit mi,
            malesuada arcu eu urna. Id mi est urna velit pretium nunc. Convallis
            adipiscing suspendisse cras nunc eget fermentum, amet molestie
            semper. Accumsan, magna adipiscing sed risus massa justo, malesuada
            ut. Nec adipiscing facilisi faucibus in scelerisque odio condimentum
            enim. Sed diam egestas ultricies aenean dui. In turpis vel, quisque
            amet molestie diam est condimentum convallis. Id mauris bibendum
            consectetur ut. Nullam quam lacus, est, vestibulum nec in. Enim
            pellentesque at penatibus convallis at fermentum ut. Nisl egestas at
            aliquet risus. Turpis urna suspendisse venenatis egestas adipiscing
            dolor sit leo.
          </S.TextFieldCustom>
        </DialogContent>
      </Dialog>
    </div>
  );
}

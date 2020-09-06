import React from 'react';
import { ListIcons, ListMenu } from '../utils/constants';
import * as S from '../components/styled';
import { Grid } from '@material-ui/core';

function Home() {
  return (
    <>
      <S.Box>
        <div className="img-home"></div>
        <Grid container className="list-icons">
          {ListIcons.map((item, index) => (
            <Grid item xs={4} key={index}>
              <S.Link href={item.href}>
                <img src={item.img} alt={item.alt} />
                <p className="text">{item.text}</p>
              </S.Link>
            </Grid>
          ))}
        </Grid>
        <Grid container className="list-menu">
          {ListMenu.map((menu, i) => (
            <Grid item xs={3} key={i}>
              <S.MenuList>
                <img src={menu.img} alt={menu.alt} />
                <p className="text">{menu.text}</p>
              </S.MenuList>
            </Grid>
          ))}
        </Grid>
      </S.Box>
    </>
  );
}

export default Home;

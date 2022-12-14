import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isAuthCheck, logout } from '../../redux/slices/auth';

import { AiOutlineCloud } from 'react-icons/ai';
import styles from './Header.module.css';

export const Header = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthCheck);

  const onClickLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={styles.header}>
      <Container>
        <Grid className={styles.menu}>
          <Grid className={styles.logo}>
            <NavLink to="/">
              <AiOutlineCloud />
            </NavLink>
          </Grid>
          <Grid>
            {isAuth ? 
            <>
            <NavLink className={styles.profileLink} to="/">
              My profile
            </NavLink>
            <Button onClick={onClickLogout} variant="contained" color="error">
              Log Out
            </Button>
            </> :
              <>
                <NavLink to="/login">
                  <Button variant="outlined">
                    Log in
                  </Button>
                </NavLink>
              </>
            }
          </Grid>
        </Grid>
      </Container>
    </div>
  )
};

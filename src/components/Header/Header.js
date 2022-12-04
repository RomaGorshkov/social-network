import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isAuthCheck } from '../../redux/slices/auth';

import { AiOutlineCloud } from 'react-icons/ai';
import styles from './Header.module.css';

export const Header = () => {

  const isAuth = useSelector(isAuthCheck);

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
            <NavLink to="/">
              My profile
            </NavLink>
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

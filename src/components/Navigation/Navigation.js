import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';

import { ImProfile } from 'react-icons/im';
import { FiMessageSquare, FiUsers, FiSettings } from 'react-icons/fi';
import { GiThreeFriends } from 'react-icons/gi';


export const Navigation = ({ isAuth }) => {
  return (
    <Container>
      <div className={styles.navigation}>
          <div className={styles.menu}>
            <NavLink to="/">
              <ImProfile />
            </NavLink>
            <NavLink to="/friends">
              <FiUsers />
            </NavLink>
            <NavLink to="/messages">
              <FiMessageSquare />
            </NavLink>  
            <NavLink to="/users">
              <GiThreeFriends/>
            </NavLink>
            <NavLink to="/settings">
              <FiSettings />
            </NavLink>
          </div>
      </div>
    </Container>
  )
};

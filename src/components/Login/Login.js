import React from 'react';
import styles from './login.module.css';
import { Button, Checkbox, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, isAuthCheck } from '../../redux/slices/auth';
import { Navigate } from 'react-router';

export const Login = () => {

  const dispatch = useDispatch();

  const isAuth = useSelector(isAuthCheck);

  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      email: "free@samuraijs.com",
      password: "free",
      rememberMe: true,
    },
    mode: "onChange"
  });

  const onSubmit = async (values) => {
    await dispatch(fetchAuth(values));
  };

  if(isAuth) {
    return <Navigate to="/" />
  }

  return (
      <Paper className={styles.login}>
        <Typography className={styles.title} variant="h5">
          Log In
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={styles.field}
            type="email"
            label="E-mail"
            {...register('email', {required: "Enter a email"})}
            fullWidth
          />
          <TextField
            className={styles.field}
            type="password"
            label="Password"
            {...register('password', {required: "Enter a password"})}
            fullWidth
          />
          <div className={styles.check}>
          <Checkbox
            className={styles.checkbox}
            {...register("rememberMe",{required: false})} 
          />
          <div className={styles.text}>
            Remember Me
          </div>
          </div>
          <Button disabled={!isValid} variant="contained" type="submit" size="large" fullWidth>
            Log In
          </Button>
        </form>
      </Paper>
  )
};

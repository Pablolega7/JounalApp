import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

export const LoginPage = () => {

 const dispatch = useDispatch(checkingAuthentication());

 const { email, password, onInputChange } = useForm({
    email    : "pablopulido@google.com",
    password : "123456"
 });

 const onSubmit = ( e ) => {
    e.preventDefault();
    dispatch( checkingAuthentication() );
    console.log({ email, password });
 };

 const onGoogleSignIn = () => {
    console.log("Google Sign In");
    dispatch( startGoogleSignIn() );
 };

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label       ="Email"
              type        ="email"
              placeholder ="correo@gmail.com"
              fullWidth
              name        ="email"
              value       ={ email }
              onChange    ={ onInputChange }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label       ="Password"
              type        ="password"
              placeholder ="Password"
              fullWidth
              name        ="password"
              value       ={ password }
              onChange    ={ onInputChange }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button onClick={ onGoogleSignIn } variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Link component={ RouterLink } color="inherit" to="/auth/register">
            Create an Account
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};

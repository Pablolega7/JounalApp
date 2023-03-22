import React from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";


const formData = {
  displayName : "",
  email       : "",
  password    : "",
};

 const validatesForm = {
  email       : [ ( value ) => value.includes( "@" ), "The Email is Required." ],
  password    : [ ( value ) => value.length >= 6, "The Password must be 6 Characters." ],
  displayName : [ ( value ) => value.length >= 1, "The Name is Required." ],
};

export const RegisterPage = () => {
  const [formSubmitted, setformSubmitted] = useState( false )
  const { displayName, email, password, onInputChange, formState, displayNameValid, emailValid, passwordValid, isFormValid } = useForm( formData, validatesForm );

  const onSubmit = ( e ) => {
    e.preventDefault();
    setformSubmitted( true );
    console.log( formState );
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={ onSubmit }>
        <Grid container>

        <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label       ="Complete Name"
              type        ="text"
              placeholder ="Complete Name"
              fullWidth
              name        ="displayName"
              value       ={ displayName }
              onChange    ={ onInputChange }
              error       ={ !!displayNameValid && formSubmitted }
              helperText  ={ displayNameValid }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label       ="Email"
              type        ="email"
              placeholder ="correo@gmail.com"
              fullWidth
              name        ="email"
              value       ={ email }
              onChange    ={ onInputChange }
              error       ={ !!emailValid && formSubmitted }
              helperText  ={ emailValid }
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
              error       ={ !!passwordValid && formSubmitted }
              helperText  ={ passwordValid }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 }>
              <Button variant="contained" fullWidth type="submit">
                Create Account
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Already Have an Account?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Get Into
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};

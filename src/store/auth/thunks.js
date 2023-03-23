import { checkingCredentials, logout, login } from "./";
import { singInWithGoogle, registerUserWithEmailPassword } from "../../firebase/providers";

export const checkingAuthentication = ( email, password ) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
  };
};

export const startGoogleSignIn = () => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
    const result = await  singInWithGoogle();
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
    dispatch ( login( result ) );
  };
};

export const startCreatingUserEmailPassword = ( { email, password, displayName } ) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
    const result = await  registerUserWithEmailPassword( { email, password, displayName } );
    console.log( result );
  };
};

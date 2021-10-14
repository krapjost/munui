import React from 'react';
import styled from 'styled-components';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const GoogleLoginBtn = styled.button`
	padding: 1em;
	margin: 0.5em;
	border: none;
	background-color: black;
	color: white;
	&:hover {
		color: black;
		background-color: white;
		border: 1px solid black;
	}
`
const LogoImage = styled.img`
	
`
export default function SignIn() {

    const signInWithGoogle = () => {
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider)
	    .then((res) => {
		const credential = GoogleAuthProvider.credentialFromResult(res);
		const token = credential?.accessToken;
		const user = res.user;
	    })
	    .catch((err) => {
		const {code, message, email} = err;
		const credential = GoogleAuthProvider.credentialFromError(err);
	    })
    };

    return (

	    <GoogleLoginBtn onClick={signInWithGoogle}>
		Sign in with Google
	    </GoogleLoginBtn>
    )
}

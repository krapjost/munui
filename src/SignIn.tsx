import React from 'react';
import styled from 'styled-components';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const GoogleLoginBtn = styled.div`
	padding: 0.5em;
	margin: 0.5em;
	background-color: blue;
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
	<GoogleLoginBtn>
	    <button onClick={signInWithGoogle}>
		Sign in with Google
	    </button>
	</GoogleLoginBtn>
    )
}

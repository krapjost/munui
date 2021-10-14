import React from 'react';
import styled, { keyframes }from 'styled-components';
import {ReactComponent as MunuiLogo} from './icons/moonlogo.svg';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Container = styled.div`
	background-color: #222222;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const redToBlue = keyframes`
	0% {
		fill: red;
	}
	50% {
		fill : blue;
	}
	100% {
		fill: red;
	}
`
const greenToPurple = keyframes`
	0% {
		fill: green;
	}
	50% {
		fill: purple;
	}
	100% {
		fill: green;
	}
`
const blueToGreen = keyframes`
	0% {
		fill: blue;
	}
	50% {
		fill: green;
	}
	100% {
		fill: blue;
	}
`
const StyledLogo = styled(MunuiLogo)`
	&& {
		width: 50%;
		height: 300px;
		animation: ${rotate} 5s linear infinite;
		g {
			g:nth-child(2) {
				path {
					animation: ${redToBlue} 2s linear infinite
				}
			}
			g:nth-child(3) {
				path {
					animation: ${greenToPurple} 3s ease-out infinite
				}
			}
			g:nth-child(4) {
				path {
					animation: ${redToBlue} 10s ease-in infinite
				}
			}
			g:nth-child(5) {
				path {
					animation: ${greenToPurple} 3s ease-in infinite
				}
			}
			g:nth-child(6) {
				path {
					animation: ${redToBlue} 4s ease infinite
				}
			}
			g:nth-child(7) {
				path {
					animation: ${greenToPurple} 3s ease infinite
				}
			}
			g:nth-child(8) {
				path {
					animation: ${blueToGreen} 6s ease infinite
				}
			}
			g:nth-child(9) {
				path {
					animation: ${greenToPurple} 3s ease infinite
				}
			}
		}
	}
`;

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
		<Container>
			<StyledLogo />
			<GoogleLoginBtn onClick={signInWithGoogle}>
				Sign in with Google
			</GoogleLoginBtn>
		</Container>
    )
}

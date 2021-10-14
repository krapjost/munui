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
	gap: 1em;
	align-items: center;
	justify-content: center;
`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
/**
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
**/

const StyledLogo = styled(MunuiLogo)`
	&& {
		width: 50%;
		height: min-content;
		animation: ${rotate} 5s ease infinite;
	}
`;

/*
g{
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
*/

const GoogleLoginBtn = styled.button`
	font-size: 1.2em;
	border-radius: .5em;
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

const H1 = styled.h1`
	margin: 0;
	font-size: 2.8em;
	max-width: 300px;
	word-break: keep-all;
	text-align: center;
	font-weight: bold;
	color: #A15186;
`

const H2 = styled.h2`
	margin: 0;
	font-size: 1.8em;
	max-width: 340px;
	word-break: keep-all;
	text-align: center;
	font-weight: 600;
	color: white;
`

const PrimaryBtn = styled.button`
	border: none;
	outline: none;
	background: none;
	border-radius: .5em;
	box-shadow: 0px 0px 0px 2px #89DF8C inset;
	color: #89DF8C;
	padding: .5em 1em;
	font-size: 1.3em;
	line-height: 1.4em;
`

const SecondaryBtn = styled.button`
	border: none;
	outline: none;
	background: #7E2E63;
	border-radius: .5em;
	color: white;
	padding: .5em 1em;
	font-size: 1.3em;
	line-height: 1.4em;
`

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 1em;
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
			<H1>
				모두를 위한 디자인 툴
			</H1>
			<H2>
				MUNUI의 조작 방법에 대한 설명을 들으시겠어요?
			</H2>
			<FlexRow>
				<SecondaryBtn>
					귀찮아요
				</SecondaryBtn>
				<PrimaryBtn>
					네 알려주세요
				</PrimaryBtn>
			</FlexRow>
			<GoogleLoginBtn onClick={signInWithGoogle}>
				Sign in with Google
			</GoogleLoginBtn>
		</Container>
    )
}

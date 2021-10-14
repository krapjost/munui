import React from 'react';
import SketchBook from './Sketch';
import SignIn from './SignIn';

import fireConfig from './fireConfig';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import './styles/global.css';

initializeApp(fireConfig);

export default function App() {
    const auth = getAuth();
    const [user] = useAuthState(auth);

    return (
	<>
	    {user ? <SketchBook /> : <SignIn />}
	</>
    );
}


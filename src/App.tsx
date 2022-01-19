import SignIn from "./SignIn";

import fireConfig from "./fireConfig";
import { initializeApp } from "firebase/app";
import "./styles/global.css";

initializeApp(fireConfig);

export default function App() {
  return <SignIn />;
}

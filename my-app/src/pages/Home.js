import Nav from "../components/Nav";
import "../styles/nav.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/home.css";
import { createElement, useState } from "react";

export default function Home() {
  const [isToggle, setIsToggle] = useState(false);

  const toggled = () => {
    setIsToggle(!isToggle);
    console.log(isToggle);
  };

  return (
    <div>
      <Nav />
      <div className="parents">{isToggle ? <h1>Vrai</h1> : <h2>Faux</h2>}</div>
      <button onClick={toggled}>test ici</button>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="ChooseLink">

        <li className="link">
          <Link to={"/home"}>Home</Link>
          </li>
        <li className="link">
          <Link to={"/about"}>About me</Link>
        </li>
        <li className="link">
          <Link to={"/tarifs"}>Tarifs</Link>
        </li>
        <li className="link">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </div>
    </nav>
  );
}

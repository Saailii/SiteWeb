import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="ChooseLink">
        <li>
          <Link to={"/about"}>About me</Link>
        </li>
        <li>
          <Link to={"/tarifs"}>Tarifs</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </div>
    </nav>
  );
}

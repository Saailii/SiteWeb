import { Link } from "react-router-dom"

import Logo from "../assets/Logo.png"


export default function Nav() {
    return <nav>
        <div>
       <li><Link to="/home"><img src={ Logo }></img></Link></li>
       </div>
       <div className="ChooseLink">
        <li><Link to={"/about"}>About me</Link></li>
        <li><Link to={"/tarifs"}>Tarifs</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
        </div>
       
    </nav>
}
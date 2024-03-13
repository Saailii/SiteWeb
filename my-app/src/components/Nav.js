import { Link } from "react-router-dom"




export default function Nav() {
    return <nav>
       <li><Link to="/home"><img src=""></img></Link></li>
        <li><Link to={"/about"}>About me</Link></li>
        <li><Link to={"/tarifs"}>Tarifs</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
       
    </nav>
}
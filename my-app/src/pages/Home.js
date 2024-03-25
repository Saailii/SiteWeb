import Nav from "../components/Nav";
import "../styles/nav.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/home.css";

import infoObjet from "../datas/imgCaroussel";
import DropDown from "../components/DropDown";

export default function Home() {
  return (
    <div className="main">
      <Nav />
      <div className="container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: '300px 300px',
          gridTemplateRows: "200px 200px 200px 200px ",
          gridRowGap: "30px",
          gridColumnGap: "30px",
          
          width: "800px",
          margin: "auto",
        }}
      >

       
        {infoObjet.map((objet) => (
        
            <div key={objet.id} className="value">
              <h3 className="nomObjet">{objet.nomObjet}</h3>
              <img src={objet.imageObjet} alt={objet.nomObjet} />
              <a href={objet.link} target="blank">
                <p>{objet.textObjet}</p>
              </a>
            </div>
     
          
        ))}
       

      </div>
      </div>
      <DropDown />
    </div>
    
  );
}

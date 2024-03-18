import Nav from "../components/Nav";
import "../styles/nav.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/home.css";

import infoObjet from "../datas/imgCaroussel";

export default function Home() {
  return (
    <div className="main">
      <Nav />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px))',
          gridTemplateRows: "1fr 1fr  ",
          gridColumnGap: "60px",
          gridRowGap: "30px",
          width: "800px",
          margin: "auto",
        }}
      >
        {infoObjet.map((objet) => (
          <div className="container">
            <div key={objet.id} className="value">
              <h3>{objet.nomObjet}</h3>
              <img src={objet.imageObjet} alt={objet.nomObjet} />
              <a href={objet.link} target="blank">
                <p>{objet.textObjet}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

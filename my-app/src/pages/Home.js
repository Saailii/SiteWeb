import Nav from "../components/Nav";
import "../styles/nav.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/home.css"
import { Carousel } from "react-responsive-carousel"
import infoImage from "../datas/imgCaroussel";




export default function Home() {
 
    return (
        <div>
        <Nav/>
      
        <Carousel infiniteLoop={true}>
        {infoImage.map(slide => {
            return (
            <div key={slide.id}>
                <img src={slide.image} alt=""></img>
                <h1>{slide.title}</h1>
            </div>
            )
        })}

        </Carousel>
        
        </div>
    )
}
import randomImage from "./images"
import { LazyLoadImage } from "react-lazy-load-image-component"


const Card = ({tag, src}) => {


    return(
        <>
            <div className="w3-display-container w3-round-xlarge card">
                <div className="w3-display-topleft w3-padding w3-round-large">{tag}</div>
                <LazyLoadImage 
                src={src} 
                alt={src} 
                style={{width: '100%', height: '100%'}} />
            </div>
        </>
    )
}



const Gallery = () => {

    console.log(randomImage);

    return(
        <>
            
            <div className="w3-content w3-padding" style={{maxWidth: '1564px'}}>
            
                <div className="w3-container w3-padding-32" id="projects">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Images</h3>
                </div>

                <div className="container">
                    {randomImage.map(image => (
                        <Card 
                        key={image.id} 
                        tag={image.tag} 
                        src={image.src} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Gallery
import randomImage from "./images"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useState, useRef } from "react"
import DropComponent from "./StrictModeDroppable"


//Individual image cards
const Card = ({index, tag, src, DragId}) => {


    return(
        <>
            <Draggable draggableId={DragId} index={index}>
                {(provided, snapshot) => (
                    <div 
                    className={`w3-display-container w3-round-xlarge card ${snapshot.isDragging && 'drag'}`}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} >
                        <div className="w3-display-topleft w3-padding w3-round-large">{tag}</div>
                        <LazyLoadImage 
                        src={src} 
                        alt={src} 
                        style={{width: '100%', height: '100%'}} />
                        {provided.placeholder}
                    </div>
                )}
            </Draggable>
        </>
    )
}


//The gallery component
const Gallery = () => {
    const [images, setImages] = useState(randomImage);
    const search = useRef(null);


    const onDragEnd = result => {
        const { source, destination } = result;

        //Do nothing if the destination doesn't exist
        if (!destination) return;
         
        //Do nothing if dropped in the same place
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        //create copy of images
        let add, active = images;

        //if the dragged is from the gallery drop field
        if (source.droppableId === 'gallery') {
            //copy and hold the current dragged item
            add = active[source.index];
            //remove it from the array
            active.splice(source.index, 1);
        }

        //if the drop field is gallery
        if (destination.droppableId === 'gallery') {
            //add the dragged item before the seeked position
            active.splice(destination.index, 0, add);
        }

        //set the array with the latest form
        setImages(active);
    }


    //function for searching and filtering images by tag
    const handleSearch = () => {
        let query = search.current.value;
        //if the search field is empty, show all images
        if (!query) {
            setImages(randomImage);
        } else {
            let filt = randomImage.filter(image => ((image.tag).toLowerCase()).includes(query.toLowerCase()));
            setImages(filt);
        }
    }



    return(
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="w3-content w3-padding" style={{maxWidth: '1564px'}}>
                
                    <div className="w3-container w3-padding-32" id="projects">
                        <div className="w3-border-bottom w3-border-light-grey w3-padding-16">
                            <h3>Images</h3>
                            <div>
                                <span>Nature</span><span>Car</span><span>Animal</span><span>Tech</span><span>Housing</span><span>Art</span><span>Cityscape</span><span>Travel</span>
                            </div>
                        </div>

                        <div className="search w3-content" style={{maxWidth: '500px'}}>
                            <input
                            ref={search}
                            type="text"
                            onInput={handleSearch}
                            placeholder="Search to filter"
                            />

                            <i 
                            onClick={handleSearch} className="w3-hide-medium w3-hide-large w3-button w3-blue fa-solid fa-search"></i>
                            <button 
                            onClick={handleSearch}
                            className="w3-hide-small w3-button w3-blue">Search</button>
                        </div>

                    </div>


                    <DropComponent droppableId="gallery">
                        {(provided, snapshot) => (
                            <div className={`container ${snapshot.isDraggingOver && 'dragactive'}`} ref={provided.innerRef}
                            {...provided.droppableProps}>
                                {images.map((image, index) => (
                                    <Card
                                    index={index} 
                                    key={image.id} 
                                    tag={image.tag} 
                                    src={image.src}
                                    DragId={image.id.toString()} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </DropComponent>

                </div>
            </DragDropContext>
        </>
    )
}

export default Gallery
import { useState, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";


const DropComponent = (props) => {

    const [ enabled, setEnabled ] = useState(false);
  
    useEffect(() => {
      const animation = requestAnimationFrame(() => setEnabled(true));
  
      return () => {
         cancelAnimationFrame(animation);
         setEnabled(false);
      };
    }, []);
  
    if (!enabled) {
        return null;
    }
  
    return (
      <Droppable {...props}>
        
      </Droppable>
    );
}

export default DropComponent
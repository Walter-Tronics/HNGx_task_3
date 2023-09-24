import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'


const DbaseContext = createContext(undefined);


let authValues = {
    signedUp: false,
    signedIn: false,
}

function getAuth() {
    let stored = JSON.parse(localStorage.getItem("auth"));
    //If the stored value is not empty
   //Make the stored value as the initial authValues object
    if (stored) authValues = stored
  }

  //Call the saved tasks onload up
  getAuth();


export const DbaseProvider = ({children}) => {
    const [auth, setAuth] = useState(authValues)

    //Create a single supabase client for interacting with your database
    const supabase = createClient('https://seqnuhydxtgenbwvlyap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlcW51aHlkeHRnZW5id3ZseWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNjcyNTUsImV4cCI6MjAxMDY0MzI1NX0.Dt1KQ9Ri7echHypsQTPjBBJXDpAvVERHKcy4Zg8DIi4');


    //Saving the scores to local storage upon the scores object updating
    useEffect(() => {
        localStorage.setItem("auth", JSON.stringify(auth));
    }, [auth]);
    

    return (
        <DbaseContext.Provider value={{ 
            supabase, 
            auth, setAuth 
            }}>
            {children}
        </DbaseContext.Provider>
    )
}

export const useDbase = () => useContext(DbaseContext)
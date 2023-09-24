import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'


const DbaseContext = createContext(undefined);


export const DbaseProvider = ({children}) => {
    const [auth, setAuth] = useState({
        signedUp: false,
        signedIn: false,
    })

    //Create a single supabase client for interacting with your database
    const supabase = createClient('https://seqnuhydxtgenbwvlyap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlcW51aHlkeHRnZW5id3ZseWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNjcyNTUsImV4cCI6MjAxMDY0MzI1NX0.Dt1KQ9Ri7echHypsQTPjBBJXDpAvVERHKcy4Zg8DIi4');
    

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
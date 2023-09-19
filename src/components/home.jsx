import { createClient } from '@supabase/supabase-js'
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





//Create a single supabase client for interacting with your database
const supabase = createClient('https://seqnuhydxtgenbwvlyap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlcW51aHlkeHRnZW5id3ZseWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNjcyNTUsImV4cCI6MjAxMDY0MzI1NX0.Dt1KQ9Ri7echHypsQTPjBBJXDpAvVERHKcy4Zg8DIi4');



const Home = () => {
    

    // functions for popup
    const toastId = useRef(null);

    const notify = () => toastId.current = toast.info("Logging you out", { autoClose: false });

    const update = () => toast.update(toastId.current, {
        render: "Logout failed, please try again !",
        type: toast.TYPE.ERROR, 
        autoClose: 5000 
    });



    async function logout (){
        notify();
        try {
            const { error } = await supabase.auth.signOut();
            console.log(error);
            window.location = '/';
        } catch (err) {
            update();
            console.log(err.message);
        }
    }


    return (
        <>
            <div>This is the gallery</div>
            <button onClick={logout}>Logout</button>
            <ToastContainer />
        </>
    ) 
}

export default Home
import { createClient } from '@supabase/supabase-js'
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
import { useDbase } from '../context';
import Gallery from './gallery';
import headimg from '../assets/headimg.jpg';
import Loader from './loader';



const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {supabase} = useDbase();


    async function isUser() {
        const { data: { user } } = await supabase.auth.getUser();
        setIsLoggedIn(user);
        console.log({data: isLoggedIn, user: user});
    }
    
    
    
    // functions for popup
    const toastId = useRef(null);

    const notify = () => toastId.current = toast.info("Logging you out", { autoClose: false });

    const update = () => toast.update(toastId.current, {
        render: "Logout failed, please try again !",
        type: toast.TYPE.ERROR, 
        autoClose: 5000 
    });


    async function logout(){
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
    

    useEffect(()=> {
        isUser();
    }, []);

    
    return isLoggedIn ? (
        <>
            <div className="w3-top">
                <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                    <Link to='/gallery' className="w3-left w3-bar-item w3-button brand">Gallery</Link>
                    {/* <!-- Float links to the right. Hide them on small screens --> */}
                    <div className="w3-right">
                        <button onClick={logout} className="w3-bar-item w3-button w3-blue w3-round">Log out</button>
                    </div>
                </div>
            </div>

            {/* <!-- Header --> */}
            <header className="w3-display-container w3-content w3-wide" style={{maxWidth: '1500px'}} id="home">
                <img className="w3-image" src={headimg} alt="header" width={1500} height={800} />
            </header>

            <Gallery />

            <ToastContainer />
        </>
    ) : <Notify user={isLoggedIn}/>;
}


const Notify = ({user}) => {


    return user == null ? (
        <>
            <div className='notify_cont'>
                <p>Oops! Looks like you need to login first</p>
                <Link to='/'>Login</Link>
            </div>
        </>
    ) : <Loader />;
}


export default Home
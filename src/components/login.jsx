import './login.css'
import { createClient } from '@supabase/supabase-js'
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDbase } from '../context';
import { Link } from 'react-router-dom';



const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const {supabase, auth, setAuth} = useDbase();
    const username = useRef(null),
    password = useRef(null);

    
    // functions for popup
    const toastId = useRef(null);
    
    //Loading popup
    const notify = () => toastId.current = toast.info("Logging in, Please wait...", { autoClose: false });

    //Error popup
    const update = () => toast.update(toastId.current, {
        render: "Invalid email or password",
        type: toast.TYPE.ERROR, 
        autoClose: 5000 
    });


    //function for logging in
    async function logInUser(e) {
        //prevent page reload
        e.preventDefault();

        //Call loading popup
        notify();

        //Try to login user
        const { data, error } = await supabase.auth.signInWithPassword({
            email: username.current.value,
            password: password.current.value,
        });

        //Redirect to the gallery page if user is logged in
        (data.user) ? window.location = '/gallery' : update();

        console.log({data: data, error: error});
        //clear the input fields
        username.current.value = '';
        password.current.value = '';
    }


    return (
        <>
            <div className='overall'>
                <form className="box" onSubmit={logInUser}>
                    <h1>Login</h1>

                    <div className="w3-row w3-bottombar w3-border-pink w3-rightbar">
                        <div className="w3-col user_icon">
                            <i className="w3-xlarge fa-solid fa-user"></i>
                        </div>

                        <div className="w3-rest">
                            <input 
                            ref={username}
                            type="email" 
                            placeholder="Email" 
                            required />
                        </div>

                    </div>

                    <br />

                    <div className="w3-row w3-bottombar w3-border-pink w3-rightbar password">
                        <div className="w3-third pass_icon">
                            <i className="w3-xlarge fa-solid fa-lock"></i>
                        </div>

                        <div className="w3-third" id="pass">
                            <input 
                            ref={password}
                            type={showPass ? 'type' : 'password'} 
                            placeholder="Password" 
                            required />
                        </div>

                        <div className="w3-third" id="eye" onClick={()=> setShowPass(!showPass)}>
                            <i className={`fa-solid ${showPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </div>
                    </div>

                    <input type="submit" id="submit" value="Login" />

                    <span className='signup'>
                    Don't have an account yet? <Link to='/signup'>Sign up</Link>
                    </span>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login;
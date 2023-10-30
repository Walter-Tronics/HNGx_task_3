import './login.css'
import { createClient } from '@supabase/supabase-js'
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDbase } from '../context';
import { Link, useNavigate } from 'react-router-dom';



const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const {supabase, auth, setAuth} = useDbase();
    const navigate = useNavigate();
    const username = useRef(null),
    password = useRef(null);


    // functions for popup
    const toastId = useRef(null);

    //Loading popup
    const notify = () => toastId.current = toast.info("Signing up, Please wait...", { autoClose: false });

    //Error popup
    const update = (message) => toast.update(toastId.current, {
        render: message,
        type: toast.TYPE.ERROR, 
        autoClose: 5000 
    });

    //Error popup
    const success = () => toast.update(toastId.current, {
        render: "Account created, redirecting you to login...",
        type: toast.TYPE.SUCCESS, 
        autoClose: 5000
    });

    console.log({signedUp: auth.signedUp});


    //function for logging in
    async function SignUpUser(e) {
        //prevent page reload
        e.preventDefault();

        //Call loading popup
        notify();

        //Try to sign up user
        const { data, error } = await supabase.auth.signUp({
            email: username.current.value,
            password: password.current.value,
        });


        if (data.user) {
            setAuth({
                ...auth,
                signedUp: true
            });
            success();
            console.log({signed: auth.signedUp});

            //redirect back to the login page
            setTimeout(() => navigate(-1), 2000);
            ; //window.location = '/';
        } else {
            update(error.message);
        }
        //Redirect to the login page if user is registered
        // (data.user) ? window.location = '/' : update(error.message);

        console.log({data: data, error: error});
        //clear the input fields
        username.current.value = '';
        password.current.value = '';
    }


    return (
        <>
            <div className='overall'>
                <form className="box" onSubmit={SignUpUser}>
                    <h1>Register</h1>

                    <div className="w3-row w3-bottombar w3-rightbar">
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

                    <div className="w3-row w3-bottombar w3-rightbar password">
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

                    <input type="submit" id="submit" value="Register" />

                    <span className='signup'>
                    Already a member? <Link to='/'>Log in</Link>
                    </span>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Signup;
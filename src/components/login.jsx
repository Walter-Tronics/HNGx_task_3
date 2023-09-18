import './login.css'

const Login = () => {


    return (
        <>
            <div className='overall'>
                <form className="box">
                    <h1>Login</h1>

                    <div className="w3-row w3-bottombar w3-border-pink w3-rightbar">
                        <div className="w3-col user_icon">
                            <i className="w3-xlarge fa fa-user"></i>
                        </div>

                        <div className="w3-rest">
                            <input type="text" placeholder="Username" required />
                        </div>

                    </div>

                    <br />

                    <div className="w3-row w3-bottombar w3-border-pink w3-rightbar password">
                        <div className="w3-third pass_icon">
                            <i className="w3-xlarge fa fa-lock"></i>
                        </div>

                        <div className="w3-third" id="pass">
                            <input type="password" placeholder="Password" required/>
                        </div>

                        <div className="w3-third" id="eye" >
                            <i className="fas fa-eye" onclick="change()"></i>
                        </div>
                    </div>

                    <input type="submit" id="submit" value="Login"/>
                </form>
            </div>
        </>
    )
}

export default Login;
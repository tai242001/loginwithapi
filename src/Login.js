import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
    // const formik =useFormik({
    //     initialValues:{
    //         email: '',
    //         password: ''
    //     },

    //     onSubmit:(values) =>{
    //         console.log(values);

    //     }

    // });
    // console.log(formik.values);

    //Email: Tai124@gmail.com
    //Password: 123


    const [email, setEmail] = useState("tai124@gmail.com");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const handlelogin = async () => {
        setSuccess(true);
        try {
            const baseURl = "https://api.realworld.io/api/users/login"
            const res = await axios.post(baseURl, {
                "user": {
                    "email": email,
                    "password": password
                }
            },
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
            localStorage.setItem("token", res.data.user.token);
            console.log(res.data);
            window.location.href = ('/dashboard')


        } catch (e) {
            setSuccess(false);
            console.log(e);
            alert("failed")

        }
    }
    const handlesubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className='main'>
            <div className='container loginmain'>
                <div className='card'>
                    <div className='card-header'>
                        <h4>Đăng nhập vào hệ thống</h4>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={handlesubmit}>
                            <div className='input-group form-group'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' type='email' />
                            </div>
                            <div className='input-group form-group'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input className='form-control' id='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' type='Password' />
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox" />Remember Me
                            </div>
                            <div>
                                <button className='btn btn-default float-right ' onClick={handlelogin}>Login</button>

                            </div>
                        </form>
                    </div>
                    <div className='card-footer'>
                        <div>
                            Don't have an account?<a className='signup' href='#'>Signup</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

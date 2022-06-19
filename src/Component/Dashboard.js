import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Dashboard() {
    useEffect(() => {
        axios.get('https://api.realworld.io/api/user')
            .then(res => console.log(res.data)).catch(err => console.log(err))
    }, [])
    // useEffect(async () => {
    //     try {
    //         const baseURl = "https://api.realworld.io/api/user"
    //         const res = await axios.get(baseURl, {
    //             headers: 


    //         })
    //         console.log(res.data)

    //     }
    //     catch (e) {


    //     }
    // }, [])


    return (
        <div className='container dashboard'>
            <div className='header-main'>
                <nav className='navbar navbar-light'>
                    <div className='container'>

                        <a className='logo'>
                            <h1>Logo</h1>
                        </a>
                        {
                            localStorage.getItem('token') ? (
                                <ul className='nav navbar-nav' >
                                    <li className='nav-item'><Link to='/home'>Home</Link></li>
                                    <li className='nav-item'><Link to='/new-articles'><span><i className="fas fa-edit"></i></span>New articles</Link></li>
                                    <li className='nav-item'><Link to='/setting'><span><i className="fas fa-cog"></i></span>Setting</Link></li>
                                    <li className='nav-item'><Link to='/setting'><span><i className="fas fa-user"></i></span>User</Link></li>
                                </ul>)
                                : (
                                    <ul className='nav  navbar-nav'>
                                        <li className='nav-item'><Link to='/home'>Home</Link></li>
                                        <li className='nav-item'><Link to='/new-articles'>Sign in</Link></li>
                                        <li className='nav-item'><Link to='/setting'>Sign up</Link></li>
                                    </ul >
                                )
                        }
                    </div>



                </nav>


            </div>
        </div>
    )
}

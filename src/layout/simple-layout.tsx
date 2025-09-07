import React from 'react';
import styles from './simple-layout.module.css';
import { NavLink, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logout, type AuthState } from '../redux/slices/auth';

const SimpleLayout = (props: React.PropsWithChildren) => {
    const navigate = useNavigate();
    const auth: AuthState = useSelector((state: any) => state.auth);
    const dispatch = useDispatch(); 

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    }

    return (
    <div className={styles.SimpleLayout}>
        <div className='navbar navbar-expand-lg navbar-light bg-primary' data-bs-theme="dark">
            <div className='container'>
                <a className='navbar-brand' href='#'>StationFlow</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/stations">My Station</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/orders">Orders</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Management
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    <div>
                        <span className='navbar-text text-white me-3'>Welcome {auth.firstname} {auth.lastname},</span>
                        <a style={{cursor: "pointer"}} className='text-white' onClick={handleLogout}>Logout</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.MainContent}>
            {props.children}
        </div>
        <footer className='bg-light text-center text-lg-start mt-auto'>
            <div className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2025 Copyright: 
                <a className='text-dark' href='https://mdbootstrap.com/'> StationFlow.com</a>
            </div>
        </footer>
    </div>
)};

export default SimpleLayout;
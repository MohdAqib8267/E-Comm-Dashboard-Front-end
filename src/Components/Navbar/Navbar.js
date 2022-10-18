import React from 'react'
import './Navbar.css';
import {useNavigate,NavLink, json} from 'react-router-dom' 
function Navbar(){
    const navigate=useNavigate();
    const auth=localStorage.getItem('user');

    const logout=()=>{
        localStorage.clear();
        navigate('/signup')
    }

    return(
        <div>
            <img className='logo' src="https://www.pngfind.com/pngs/m/29-290389_e-commerce-website-logo-png-download-e-commerce.png" alt="" />
            {
                auth? 
            <ul className='Nav-List'>
                
            <li><NavLink to={'/'}>Products</NavLink></li>
            <li><NavLink to={'/add'}>Add Products</NavLink></li>
            <li><NavLink to={'/update'}>Update Products</NavLink></li>
            <li><NavLink to={'/profile'}>Profile</NavLink></li>
            <li><NavLink onClick={logout} to={'/signup'}>Logout ({JSON.parse(auth).name})</NavLink></li>
            </ul>
            :   
            <ul className='Nav-List Nav-right'>
                    <li><NavLink to={'/signup'}>Sign Up</NavLink></li>
                    <li><NavLink to={'/login'}>Login</NavLink></li>
            </ul>

            }
        
        </div>
       
    )
}
export default Navbar;
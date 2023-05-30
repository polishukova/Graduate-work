import { Link } from 'react-router-dom'
import './Authorization.css'

export const Authorization = () => {


    return (
        <div className='auth-wrapper'>
            <h2 className='auth-title'>Sign In</h2>
            <p className='auth-text'>Email</p>
            <input className='auth-input' type='text' placeholder="Your Email"></input>
            <p className='auth-text'>Password</p>
            <input className='auth-input' type='password' placeholder="Your Password"></input>
            <button className='auth-button'>Sign In</button>
            <p className='auth-footer'>Don't have an account? <Link className='auth-link' to='/Reg'>Sign Up</Link></p>
        </div>
    )
}
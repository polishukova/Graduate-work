import { Link } from 'react-router-dom'
import './Registration.css'

export const Registration = () => {

    return (
        <div className='reg-wrapper'>
        <h2 className='reg-title'>Sign Up</h2>
        <p className='reg-text'>Name</p>
        <input className='reg-input' type='text' placeholder="Your Name"></input>
        <p className='reg-text'>Email</p>
        <input className='reg-input' type='text' placeholder="Your Email"></input>
        <p className='reg-text'>Password</p>
        <input className='reg-input' type='password' placeholder="Your Password"></input>
        <p className='reg-text'>Confirm password</p>
        <input className='reg-input' type='password' placeholder="Your Password"></input>
        <button className='reg-button'>Sign Up</button>
        <p className='reg-footer'>Already have an account? <Link className='auth-link' to='/Auth'>Sign In</Link></p>
    </div>
    )
}
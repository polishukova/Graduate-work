import { Link, useNavigate } from 'react-router-dom'
import './Authorization.scss'
import { Title } from '../Title/Title'
import { useAppSelector } from '../../Store/store'
import { useState } from 'react'

export const Authorization = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userEmail = useAppSelector(state => state.auth.userEmail)
    const userPassword = useAppSelector(state => state.auth.userPassword)

    const navigate = useNavigate()

    return (
        <div className='wrapper-auth'>
            <div className='container'>
            <Title />
            <form className='auth'>
                <legend className='auth-title'>Sign In</legend>
                <label className='auth-text'>Email</label>
                <input className='auth-input' type='text' placeholder="Your Email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                <label className='auth-text'>Password</label>
                <input className='auth-input' type='password' placeholder="Your Password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                <button className='auth-button' onClick={(e) =>{
                    e.preventDefault();
                    email===userEmail && password===userPassword ? navigate('/films') : alert('Wrong email or password');
                }}>Sign In</button>
                <p className='auth-footer'>Don't have an account? <Link className='auth-link' to='/reg'>Sign Up</Link></p>
            </form>
            </div>
        </div>
    )
}
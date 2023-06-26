import { Link, useNavigate } from 'react-router-dom'
import './Registration.scss'
import { Title } from '../Title/Title'
import { useState } from 'react'
import { useAppDispatch } from '../../Store/store'
import { setUserEmail, setUserName, setUserPassword } from '../../Store/auth'

export const Registration = () => {
    const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div className='wrapper-reg container'>
            <Title />
            <form className='reg'>
                <legend className='reg-title'>Sign Up</legend>
                <label className='reg-text'>Name</label>
                <input className='reg-input' type='text' placeholder="Your Name" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                <label className='reg-text'>Email</label>
                <input className='reg-input' type='text' placeholder="Your Email" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                <label className='reg-text'>Password</label>
                <input className='reg-input' type='password' placeholder="Your Password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                <label className='reg-text'>Confirm password</label>
                <input className='reg-input' type='password' placeholder="Your Password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}></input>
                <button className='reg-button' onClick={(e) => {
e.preventDefault();
dispatch(setUserName(name));
dispatch(setUserEmail(email));
if (password===confirmPassword) {
    dispatch(setUserPassword(password));
    navigate('/auth')
}
else alert('Password mismatch')
                }}>Sign Up</button>
                <p className='reg-footer'>Already have an account? <Link className='auth-link' to='/auth'>Sign In</Link></p>
            </form>
        </div>
    )
}
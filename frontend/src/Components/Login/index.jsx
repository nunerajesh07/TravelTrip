import { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, Navigate, Link } from 'react-router-dom'

import './index.css'
import API_BASE_URL from '../../config'


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const navigate = useNavigate()

    const token = Cookies.get('jwt_token')
    if (token) {
        return <Navigate to="/" />
    }

    const userInput = (event) => {
        setUsername(event.target.value)
    }
    const passwordInput = (event) => {
        setPassword(event.target.value)
    }
    const Submit = (JwtToken) => {
        Cookies.set('jwt_token', JwtToken, { expires: 7 })
        navigate('/', { replace: true })

    }

    const onSubmit = async (event) => {
        event.preventDefault()


        const object = {
            email: username, 
            password
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }
        const response = await fetch(`${API_BASE_URL}/api/auth/login`, options)
        const data = await response.json()

        if (response.ok && data.success) {
            Submit(data.data.token)
        }
        else {
            setErrMsg(data.message || 'Login failed')
        }
    }

    const render = () => {
        return (
            <div className='form-container'>
                <form onSubmit={onSubmit} className='login-form'>
                    <h1 className='name'>Travel Trip</h1>
                    <div className="input-group">
                        <label htmlFor="username">USERNAME</label>
                        <input onChange={userInput} type="text" id="username" className='login-input' placeholder='Username' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input onChange={passwordInput} type="password" id="password" className='login-input' placeholder='Password' />
                    </div>
                    <p>{errMsg}</p>
                    <button type="submit" className='login-button'>Login</button>
                    
                    <div className="login-link-container" style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
                        <span>Don't have an account? </span>
                        <Link to="/signup" className="login-link" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Sign up here</Link>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div>
            {render()}
        </div>
    )
}

export default Login
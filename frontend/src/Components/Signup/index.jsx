import { useState } from 'react'
import { useNavigate, Navigate, Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Signup = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const navigate = useNavigate()

    const token = Cookies.get('jwt_token')
    if (token) {
        return <Navigate to="/" />
    }

    const nameInput = (event) => {
        setName(event.target.value)
    }
    const userInput = (event) => {
        setUsername(event.target.value)
    }
    const passwordInput = (event) => {
        setPassword(event.target.value)
    }

    const onSubmit = async (event) => {
        event.preventDefault()

        const object = {
            name,
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

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", options)
            const data = await response.json()

            if (response.ok && data.success) {
                Cookies.set('jwt_token', data.data.token, { expires: 7 })
                navigate('/', { replace: true })
            } else {
                setErrMsg(data.message || 'Signup failed')
            }
        } catch (error) {
            setErrMsg("Error communicating with server.")
        }
    }

    const render = () => {
        return (
            <div className='form-container'>
                <form onSubmit={onSubmit} className='signup-form'>
                    <h1 className='name'>Join Travel Trip</h1>
                    <div className="input-group">
                        <label htmlFor="name">NAME</label>
                        <input onChange={nameInput} type="text" id="name" className='signup-input' placeholder='Full Name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">EMAIL</label>
                        <input onChange={userInput} type="email" id="username" className='signup-input' placeholder='Email Address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input onChange={passwordInput} type="password" id="password" className='signup-input' placeholder='Password' required />
                    </div>
                    <p className='error-msg'>{errMsg}</p>
                    <button type="submit" className='signup-button'>Sign Up</button>
                    
                    <div className="login-link-container">
                        <span>Already have an account? </span>
                        <Link to="/login" className="login-link">Login here</Link>
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

export default Signup

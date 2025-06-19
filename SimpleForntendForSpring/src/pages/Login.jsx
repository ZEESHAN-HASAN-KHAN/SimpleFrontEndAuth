import { useState } from 'react';

export default function Login()
{
    const [form, setForm] = useState({
        username: '',
        password: ''
    }); 
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8081/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            alert('Token: ' + data.token);
            localStorage.setItem('token', data.token);
            window.location.href = '/dashboard'; // Redirect to dashboard after successful login
        }
        catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please try again.');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>Enter your credentials to login</p>

            <input type="text"    name='username' onChange={handleChange} required placeholder="Username" />
            <input type="password" name='password' onChange={handleChange} required placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    )

    }

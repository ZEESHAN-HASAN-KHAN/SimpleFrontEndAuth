import { useState } from "react";

export default function Signup()
{
    const [form, setForm] = useState({
        username: '',
        password: '',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8081/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            const data = await response.text();
       
            alert('Signup successful! Please login.' + JSON.stringify(data));
            // Optionally, you can redirect to the login page after signup
            window.location.href = '/login';
        }
        catch
    (error) {
                console.error('Signup failed:', error);
                alert('Signup failed. Please try again.');
            }   
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <p>Enter your credentials to signup</p>
            <input type="text" name='username' onChange={(e) => setForm({ ...form, username: e.target.value })} required placeholder="Username" />
            <input type="password" name='password' onChange={(e) => setForm({ ...form, password: e.target.value })} required placeholder="Password" />`
            <button type="submit">Signup</button>
            {/* <p>Already have an account? <a href="/login">Login</a></p> */}
        </form>
    )
}
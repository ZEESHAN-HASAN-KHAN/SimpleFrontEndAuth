export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            <p>This is a protected route. You should only see this if you are logged in.</p>
            <button onClick={() => {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }}>Logout</button>
        </div>
    );
}
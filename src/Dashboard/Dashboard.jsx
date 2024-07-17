import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const Dashboard = () => {
    const { auth, logout } = useContext(AuthContext);

    return (
        <div>
            {auth ? (
                <div>
                    <h1>Welcome to Dashboard</h1>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <h1>Please login</h1>
            )}
        </div>
    );
};

export default Dashboard;

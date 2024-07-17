import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserFetch = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(user);
    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                setError('No token found');
                return;
            }

            try {
                const response = await axios.get('http://localhost:5000/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
            } catch (error) {
                setError('Error fetching user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, error };
};

export default useUserFetch;

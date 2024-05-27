import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('auth');
        if (!auth) {
            navigate('/login');
        }
    }, [navigate]);
};

export default useAuth;

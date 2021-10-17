import React from 'react';
import useAUth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsignGoogle} = useAUth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsignGoogle} className="btn btn-warning">Googel Sign In</button>
        </div>
    );
};

export default Login;
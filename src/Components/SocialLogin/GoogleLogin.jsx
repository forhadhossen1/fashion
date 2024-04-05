
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../Hooks/useAuth';

const GoogleLogin = () => {
    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn}>
                    <FcGoogle className="text-center text-3xl" />
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;
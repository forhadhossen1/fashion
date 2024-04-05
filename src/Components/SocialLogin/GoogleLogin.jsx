
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // console.log(result.user)
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res)
                        navigate('/')
                    })
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
import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('Current User', currentUser)
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loading
    }
    return (
        <AuthContext.Proiver value={authInfo}>
            {children}
        </AuthContext.Proiver>
    );
};

export default AuthProviders;
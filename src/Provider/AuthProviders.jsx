import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login user 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logOut user 
    const logOut = () => {
        setLoading(true);
        signOut(auth)
    }

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
        createUser,
        signIn,
        logOut,
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
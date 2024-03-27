import { createContext } from "react";

export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {
    const authInfo = {

    }
    return (
        <AuthContext.Proiver value={authInfo}>
            {children}
        </AuthContext.Proiver>
    );
};

export default AuthProviders;
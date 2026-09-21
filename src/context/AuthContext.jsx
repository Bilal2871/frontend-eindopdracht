import { createContext } from 'react'; 
export const AuthContext = createContext(); 
export const AuthContextProvider = ({ children }) => { 
    
    console.log('AuthContext werkt!'); 

    return ( 
        <AuthContext.Provider value={{}}> 
            {children} 
        </AuthContext.Provider> ); 
    };
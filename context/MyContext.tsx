// MyContext.tsx
import { createContext, useContext, ReactNode, useState, useMemo, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase';

interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  // Add more properties as needed
}

// Define the shape of your context data
interface AuthContextData {
  user: User | null;
  googleSignIn: () => void;
  logOut: () => void;
}

// Create a context with an initial value (it can be null or an empty object)
const AuthContext = createContext<AuthContextData | null>(null);

// Create a provider component to wrap around your application
export function MyProvider({ children }: { children: ReactNode }) {
  // Define your context state here
  const [user, setUser] = useState<User | null>(null);


  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    console.log("ll")
    const res = await signInWithPopup(auth, provider);
    return res;
  }

  const logOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? {
        uid: currentUser.uid,
        displayName: currentUser.displayName || null,
        email: currentUser.email || null,
        // Add more properties here
      } : null);
    });


   
    return () => unsubscribe();
  }, []);

  const contextValue = useMemo(() => ({ user, googleSignIn, logOut }), [user]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = (): AuthContextData => {
  const contextValue = useContext(AuthContext);

  if (contextValue === null) {
    return { user: null, googleSignIn: () => {}, logOut: () => {}};
  }

  return contextValue;
};

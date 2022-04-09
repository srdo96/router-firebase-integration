import { useEffect, useState } from "react";
import firebaseApp from "../firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {});
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  //   return [user, setUser];

  //  return {user:user, signInWithGoogle:signInWithGoogle}
  return { user, signInWithGoogle, handleSignOut };
};

export default useFirebase;

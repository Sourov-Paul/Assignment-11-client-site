import{useState,useEffect} from "react";
import initializeAuthentication from './../../Firebase/firebase.init';
import { getAuth, signInWithPopup,signOut, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";

// firebase init
initializeAuthentication();

const useFirebase=()=>{
    // user handeling
    const[person,setPerson]=useState({});
    // error handeling
    const[error,setError]=useState('');
// Loading
const [isLoading,setIsLoading]=useState(true)



    const auth=getAuth();
    const googleProvider=new GoogleAuthProvider();

    const signInUsingGoogle=()=>{
        setIsLoading(true)
        return(
            signInWithPopup(auth,googleProvider)
            .then(result=>{
                setPerson(result.user);
                setError('');
            })
            .catch(error=>{
                setError(error.massage);
                
            })
            .finally(()=> setIsLoading(false))

        )
    }
// SIGNOUT============

const logOut=()=>{
    setIsLoading(true)

    signOut(auth)
    .then(()=>{
setPerson({})
    })
    .catch((error)=>{setError(error)})
    .finally(()=> setIsLoading(false));

}





    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setPerson(user);
            }
            setIsLoading(false)
        })
    },[])
    


        return {
            signInUsingGoogle,
            person,
            error,
            logOut,
            isLoading
        }
}

export default useFirebase;
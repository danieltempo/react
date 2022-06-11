import {auth, signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
import {useEffect} from "react";
import {getRedirectResult} from 'firebase/auth'
import axios from "axios";

const SignIn = () => {
    useEffect( () => {
        const getData = async () => {
            const response = await getRedirectResult(auth);

            if(response) {
                const user = await axios.post('http://localhost:9090/api/users/', {
                    'id': response.user.uid,
                    'name': response.user.displayName,
                    'email': response.user.email
                });
            }
        }

        getData();
    }, []);

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google
            </button>
        </div>
    );
}

export default SignIn;

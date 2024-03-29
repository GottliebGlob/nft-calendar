import React, {useCallback, useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Button, TextField, Typography} from "@mui/material";


interface isLoggedIn {
    setIsLoggedIn: (login: any) => void
}

export const AdminLogin = ({setIsLoggedIn}: isLoggedIn) => {
    const useFormField = (initialValue: string) => {
        const [value, setValue] = useState(initialValue);
        const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
        return {value, onChange};
    };

    const passwordField = useFormField("")
    const [errorState, setErrorState] = useState(false)
    const [error, setError] = useState("")


    const handleTry = () => {
        setErrorState(false)
        setError("")
    }
    
    const handleEnterPress = (event: React.KeyboardEvent<HTMLImageElement>) => {
        if (event.key === 'Enter') {
          handleLogIn()
        }
      }


    const auth = getAuth();
   const handleLogIn = () => signInWithEmailAndPassword(auth, "honeydropsnft@gmail.com", passwordField.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
                if (user) {
                    setIsLoggedIn(user.uid)
                }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorState(true)
            setError(error.message)
        });


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column'
        }}>
            <Typography variant="h4" style={{
                color: '#fff',
                padding: 10,
                fontWeight: 'bold',
                fontFamily: 'Pixels'
            }}>
                Log in
            </Typography>
            <div>
            <TextField
                style={{
                    width: 160,
                }}
                color="secondary"
                id="outlined-name"
                label="Password"
                onKeyDown={handleEnterPress}
                onChange={passwordField.onChange}
                onFocus={() => handleTry()}
                error={errorState}
            />
                <Button
                    variant="contained"
                    color="success"
                    sx={{
                        height: 56,
                        marginLeft: 1
                    }}
                    onClick={() => handleLogIn()}>
                    Log in
                </Button>
            </div>
            {
                errorState &&  <Typography variant="h5" style={{
                    color: '#F32013',
                    padding: 10,
                    fontFamily: 'Pixels'
                }}>
                    {error}
                </Typography>
            }
        </div>
    );
};


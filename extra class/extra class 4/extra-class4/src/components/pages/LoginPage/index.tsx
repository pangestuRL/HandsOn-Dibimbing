import React, { useState } from 'reat';
import Button from '@/component/UI/Button';
import Input from '@/components/UI/input';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
            <>
                <label htmlFor="username">username</label>
                <Input
                    onChange={(e:any) => setUsername(e.target.value)}
                    type="text"
                    id="username"
                />
            </>
            <>
                <label htmlFor="password">password</label>
                <input
                    onChange={(e:any) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                />
            </>
            <Button
                onClick={() => 
                    console.log(`username: ${username}, password: ${password}`)
                }
            >Login
            </Button>
        </>
    );
};

export default LoginPage;
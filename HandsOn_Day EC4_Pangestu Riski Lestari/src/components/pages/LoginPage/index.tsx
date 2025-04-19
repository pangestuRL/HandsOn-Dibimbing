import React, { useState } from 'react';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';

const LoginPage = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  return (
    <>
      <>
        <label htmlFor="username">username</label>
        <Input
          onChange={(e: any) => setusername(e.target.value)}
          type="text"
          id="username"
        />
      </>
      <>
        <label htmlFor="password">password</label>
        <Input
          onChange={(e: any) => setpassword(e.target.value)}
          type="password"
          id="password"
        />
      </>
      <Button
        onClick={() =>
          console.log(`username: ${username}, password: ${password}`)
        }
      >
        login
      </Button>
    </>
  );
};

export default LoginPage;

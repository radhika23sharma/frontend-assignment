import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();

    const onSubmit = ({ username, password }) => {
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('auth', 'true');
            navigate('/active');
        }
    };

    return (
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input {...register('username')} />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register('password')} />
            </FormControl>
            <Button type="submit">Login</Button>
        </Box>
    );
};

export default LoginPage;

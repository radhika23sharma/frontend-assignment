// src/components/Auth/LoginForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        const { username, password } = data;
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('auth', 'true');
            navigate('/active');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Box maxW="md" mx="auto" mt="10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input {...register('username')} />
                </FormControl>
                <FormControl mt="4">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" {...register('password')} />
                </FormControl>
                <Button type="submit" colorScheme="blue" mt="4">Login</Button>
            </form>
        </Box>
    );
};

export default LoginForm;

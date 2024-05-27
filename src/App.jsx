import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Router from react-router-dom
import { Box, Flex, Spacer } from '@chakra-ui/react';
import LoginPage from './pages/LoginPage';
import ActiveSaleOrdersPage from './pages/ActiveSaleOrdersPage';
import CompletedSaleOrdersPage from './pages/CompletedSaleOrdersPage';
import DarkModeToggle from './components/UI/DarkModeToggle';

const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem('auth');
    return isAuth ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <Router> {/* Wrap your Routes in Router */}
            <Flex as="nav" p="4">
                <Box>Sale Order Management</Box>
                <Spacer />
                <DarkModeToggle />
            </Flex>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/active" element={<PrivateRoute><ActiveSaleOrdersPage /></PrivateRoute>} />
                <Route path="/completed" element={<PrivateRoute><CompletedSaleOrdersPage /></PrivateRoute>} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router> 
    );
};

export default App;

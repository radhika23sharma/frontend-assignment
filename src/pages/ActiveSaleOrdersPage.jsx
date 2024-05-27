// src/pages/ActiveSaleOrdersPage.jsx
import React, { useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query'; // Ensure that useQuery is imported

import { fetchActiveOrders } from '../utils/api';

const ActiveSaleOrdersPage = () => {
    const { data: activeOrders, isLoading, isError, error } = useQuery('activeOrders', fetchActiveOrders);

    useEffect(() => {
        // If you need to perform additional actions when data is loaded, you can do it here
        console.log('Active orders loaded:', activeOrders);
    }, [activeOrders]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading active orders: {error.message}</div>;
    }

    return (
        <Box>
            <Heading as="h1" mb={4}>Active Sale Orders</Heading>
            {/* Render active orders here */}
            <ul>
                {activeOrders.map((order) => (
                    <li key={order.id}>
                        {/* Render order details */}
                        {order.orderNumber}
                    </li>
                ))}
            </ul>
        </Box>
    );
};

export default ActiveSaleOrdersPage;

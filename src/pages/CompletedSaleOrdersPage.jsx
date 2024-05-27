import React from 'react';
import { useSaleOrders } from '../hooks/useSaleOrder';
import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const CompletedSaleOrdersPage = () => {
    const { completedOrdersQuery } = useSaleOrders();

    if (completedOrdersQuery.isLoading) {
        return <Box>Loading...</Box>;
    }

    return (
        <Box>
            <Table>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Customer</Th>
                        <Th>Date</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {completedOrdersQuery.data.map(order => (
                        <Tr key={order.id}>
                            <Td>{order.id}</Td>
                            <Td>{order.customer}</Td>
                            <Td>{order.date}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default CompletedSaleOrdersPage;

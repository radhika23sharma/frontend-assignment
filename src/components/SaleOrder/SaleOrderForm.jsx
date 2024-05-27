import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import DatePicker from '../UI/DatePicker';
import { useSaleOrders } from '../../hooks/useSaleOrder';

const SaleOrderForm = ({ initialValues, onSubmit, readOnly }) => {
    const { control, handleSubmit } = useForm({ defaultValues: initialValues });
    const { customersQuery } = useSaleOrders();

    if (customersQuery.isLoading) {
        return <div>Loading...</div>;
    }

    if (customersQuery.isError) {
        return <div>Error loading customers</div>;
    }

    const customers = customersQuery.data;

    return (
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isReadOnly={readOnly}>
                <FormLabel>Customer</FormLabel>
                <Controller
                    name="customer_id"
                    control={control}
                    render={({ field }) => (
                        <Select {...field}>
                            {customers.map((customer) => (
                                <option key={customer.id} value={customer.id}>
                                    {customer.customer_profile.name}
                                </option>
                            ))}
                        </Select>
                    )}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Invoice Number</FormLabel>
                <Controller
                    name="invoice_no"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Invoice Date</FormLabel>
                <Controller
                    name="invoice_date"
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                />
            </FormControl>
            <Button type="submit" mt={4} isDisabled={readOnly}>
                Submit
            </Button>
        </Box>
    );
};

export default SaleOrderForm;

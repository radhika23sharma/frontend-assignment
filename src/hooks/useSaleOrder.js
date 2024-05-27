import { useQueryClient } from '@tanstack/react-query'; 
import { useQuery, useMutation } from '@tanstack/react-query'; 
import { fetchActiveOrders, fetchCompletedOrders, createSaleOrder, updateSaleOrder } from '../utils/api';

export const useSaleOrders = () => {
    const queryClient = useQueryClient(); 

    const activeOrdersQuery = useQuery({
        queryKey: ['activeOrders'],
        queryFn: fetchActiveOrders
    });
    const completedOrdersQuery = useQuery({
        queryKey: ['completedOrders'],
        queryFn: fetchCompletedOrders
    });

    const createMutation = useMutation({
        mutationFn: createSaleOrder,
        onSuccess: () => queryClient.invalidateQueries('activeOrders'),
    });

    const updateMutation = useMutation({
        mutationFn: updateSaleOrder,
        onSuccess: () => queryClient.invalidateQueries('activeOrders'),
    });

    return {
        activeOrdersQuery,
        completedOrdersQuery,
        createMutation,
        updateMutation,
    };
};

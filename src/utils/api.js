// src/utils/api.js
export const fetchActiveOrders = async () => {
    const response = await fetch('/api/active-orders'); // Adjust the URL to match your API endpoint
    if (!response.ok) {
        throw new Error('Failed to fetch active orders');
    }
    return response.json();
};

export const fetchCompletedOrders = async () => {
    const response = await fetch('/api/completed-orders');
    if (!response.ok) {
        throw new Error('Failed to fetch completed orders');
    }
    return response.json();
};

export const fetchCustomers = async () => {
    const response = await fetch('/api/customers'); // Adjust the URL to match your API endpoint for fetching customers
    if (!response.ok) {
        throw new Error('Failed to fetch customers');
    }
    return response.json();
};

export const createSaleOrder = async (orderData) => {
    const response = await fetch('/api/sale-orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    });
    if (!response.ok) {
        throw new Error('Failed to create sale order');
    }
    return response.json();
};

export const updateSaleOrder = async (orderId, orderData) => {
    const response = await fetch(`/api/sale-orders/${orderId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    });
    if (!response.ok) {
        throw new Error('Failed to update sale order');
    }
    return response.json();
};

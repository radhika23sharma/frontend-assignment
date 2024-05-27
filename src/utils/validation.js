// src/utils/validation.js
import * as yup from 'yup';

export const saleOrderSchema = yup.object().shape({
  customer_id: yup.number().required('Customer is required'),
  items: yup.array().of(
    yup.object().shape({
      sku_id: yup.number().required('Product is required'),
      price: yup.number().required('Price is required').positive('Price must be a positive number'),
      quantity: yup.number().required('Quantity is required').positive('Quantity must be a positive number').integer('Quantity must be an integer'),
    })
  ).min(1, 'At least one product is required'),
  invoice_no: yup.string().required('Invoice number is required'),
  invoice_date: yup.date().required('Invoice date is required').typeError('Invalid date format'),
  paid: yup.boolean().required('Paid status is required'),
});

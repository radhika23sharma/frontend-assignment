import React from 'react';
import { Input } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ value, onChange }) => (
    <ReactDatePicker selected={value} onChange={onChange} />
);

const DatePicker = ({ control, name }) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => <CustomDatePicker {...field} />}
    />
);

export default DatePicker;

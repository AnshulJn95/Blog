import React, { useId } from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    error = "",
    ...props
}, ref) {
    const id = useId();

    return (
        <div className='w-full'>
            {label && (
                <label 
                    className='inline-block mb-1 pl-1 text-gray-700' 
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${error ? 'border-red-500' : ''} ${className}`}
                ref={ref}
                id={id}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? `${id}-error` : undefined}
                {...props}
            />
            {error && (
                <p id={`${id}-error`} className='mt-1 text-red-500 text-sm'>
                    {error}
                </p>
            )}
        </div>
    );
});

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string,
};

export default Input;

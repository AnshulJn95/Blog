import React, { useId, forwardRef } from 'react';

const Select = forwardRef(function Select({
    options = [],
    label,
    className = "",
    ...props
}, ref) {
    const id = useId();
    
    return (
        <div className="w-full">
            {label && (
                <label 
                    htmlFor={id} 
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 w-full ${className}`}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default Select;

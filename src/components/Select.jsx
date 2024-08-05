import React, { useId } from 'react';

const Select = React.forwardRef(({ options, label, className, ...props }, ref) => {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="block mb-2 text-gray-700 text-sm font-semibold">
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-4 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default Select;

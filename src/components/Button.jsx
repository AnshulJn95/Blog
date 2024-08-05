import React from "react";
import PropTypes from "prop-types";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    disabled = false,
    ...props
}) {
    const baseStyles = `px-4 py-2 rounded-lg transition-colors duration-200`;
    const disabledStyles = `opacity-50 cursor-not-allowed`;
    const enabledStyles = `${bgColor} ${textColor} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`;

    return (
        <button
            type={type}
            className={`${baseStyles} ${className} ${disabled ? disabledStyles : enabledStyles}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

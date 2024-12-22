import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
  const variants = {
    primary: `bg-blue-500 text-white hover:bg-blue-600 
              disabled:bg-blue-300 disabled:cursor-not-allowed`,
    secondary: `bg-gray-200 text-gray-800 hover:bg-gray-300 
                disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed`,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

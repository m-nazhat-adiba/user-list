import React from "react";
const VARIANTS = {
  primary: "border-0 bg-[#BE0B05] text-[#ffffff] hover:bg-red-600",
  secondary: "border-0 text-red-700 hover:bg-gray-50 hover:bg-opacity-20",
  link: "border-0 text-grey-900 hover:text-white",
  outline:
    "border-2 text-white border-white hover:bg-gray-50 hover:bg-opacity-20",
};

export const Button = ({ children, variant, target }) => {
  return (
    <div>
      <button
        onClick={target}
        type="button"
        className={`py-3 px-4 rounded-lg font-semibold text-sm ${VARIANTS[variant]}`}
      >
        {children}
      </button>
    </div>
  );
};

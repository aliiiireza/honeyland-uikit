import React from "react";

const Button = ({ children }: { children?: JSX.Element | string }) => {
  return (
    <button
      className="wallet-adapter-button wallet-adapter-button-trigger"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;

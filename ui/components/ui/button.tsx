import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", size = "md", ...props }, ref) => {
    let sizeClass = "px-4 py-2 text-base";
    if (size === "sm") sizeClass = "px-3 py-1 text-sm";
    if (size === "lg") sizeClass = "px-6 py-3 text-lg";
    return (
      <button
        ref={ref}
        className={`bg-black text-white rounded-md font-semibold shadow hover:bg-gray-900 transition ${sizeClass} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

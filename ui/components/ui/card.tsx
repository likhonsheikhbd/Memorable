import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`bg-white rounded-xl border border-gray-200 ${className}`} {...props} />
  )
);
Card.displayName = "Card";

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`p-4 ${className}`} {...props} />
  )
);
CardContent.displayName = "CardContent";

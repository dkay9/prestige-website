import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
}

const base =
  "inline-flex items-center justify-center rounded-full font-medium tracking-wide cursor-pointer transition-all duration-500 ease-out";

const variants = {
  primary:
    "bg-lavender text-white hover:bg-lavender-hover hover:-translate-y-0.5 hover:shadow-lavender",
  outline:
    "bg-transparent text-ink border-2 border-border-softer hover:border-lavender hover:text-lavender hover:-translate-y-0.5",
  white:
    "bg-white text-lavender font-semibold hover:-translate-y-0.5 hover:shadow-lg",
};

const sizes = {
  sm: "px-7 py-2.5 text-sm",
  md: "px-9 py-3.5 text-sm",
  lg: "px-10 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

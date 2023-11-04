import { twMerge } from "tailwind-merge"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary"
}

export const Button = ({
  children,
  variant,
  className,
  ...rest
}: ButtonProps) => {
  const variants = {
    ["primary"]:
      "bg-primaryShade text-primary hover:bg-primary hover:text-primaryShade",
    ["secondary"]:
      "bg-secondary text-accent hover:bg-accent hover:text-secondary",
  }
  return (
    <button
      className={twMerge(
        "rounded-2xl px-10 py-3 font-bold shadow-md",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

import clsx from "clsx";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  fullWidth?: boolean;
}

const Button = ({ children, fullWidth = false, ...props }: Props) => {
  return (
    <button
      {...props}
      className={clsx(
        "py-2 px-3 bg-slate-600 rounded-e-md hover:bg-slate-500 text-white",
        !fullWidth && "w-fit"
      )}
    >
      {children}
    </button>
  );
};

export default Button;

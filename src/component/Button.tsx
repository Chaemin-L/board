import clsx from "clsx";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  primary?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  primary = true,
  fullWidth = false,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={clsx(
        "py-2 px-3  rounded-md  ",
        !fullWidth && "w-fit",
        primary
          ? "bg-slate-600 hover:bg-slate-500 text-white"
          : "bg-white border border-slate-600 text-black"
      )}
    >
      {children}
    </button>
  );
};

export default Button;

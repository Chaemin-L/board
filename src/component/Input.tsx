import clsx from "clsx";
import { ComponentProps, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: ComponentProps<"div">["className"];
}
const Input = ({ label, className: className, ...props }: Props) => {
  return (
    <label className="flex">
      <span className={clsx("w-10 inline-block mr-5", !label && "hidden")}>
        {label}
      </span>
      <input
        {...props}
        className={clsx(
          "border-b w-full border-gray-200 focus:outline-none disabled:border-none disabled:bg-transparent",
          className
        )}
      />
    </label>
  );
};

export default Input;

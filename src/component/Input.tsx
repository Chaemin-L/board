import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}
const Input = ({ label, ...props }: Props) => {
  return (
    <label className="space-x-5">
      <span>{label}</span>
      <input
        {...props}
        className="border-b border-gray-200 focus:outline-none"
      />
    </label>
  );
};

export default Input;

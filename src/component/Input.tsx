import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}
const Input = ({ label, ...props }: Props) => {
  return (
    <label className="flex space-x-5">
      <span className="w-10 inline-block">{label}</span>
      <input
        {...props}
        className="border-b w-full border-gray-200 focus:outline-none"
      />
    </label>
  );
};

export default Input;

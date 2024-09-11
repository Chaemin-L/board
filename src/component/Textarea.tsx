import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}
const Textarea = ({ label, ...props }: Props) => {
  return (
    <label className="flex">
      <span className={clsx("inline-block w-10 mr-5 ", !label && "hidden")}>
        {label}
      </span>
      <textarea
        rows={5}
        {...props}
        className="w-full p-2 border-gray-200 border rounded-md focus:outline-none resize-none disabled:border-none disabled:bg-transparent disabled:p-0"
      />
    </label>
  );
};

export default Textarea;

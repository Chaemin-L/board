import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
const Textarea = ({ label, ...props }: Props) => {
  return (
    <label className="flex space-x-5 align-top">
      <span>{label}</span>
      <textarea
        rows={5}
        {...props}
        className="p-2 border-gray-200 border rounded-md focus:outline-none resize-none"
      />
    </label>
  );
};

export default Textarea;

import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
const Textarea = ({ label, ...props }: Props) => {
  return (
    <label className="flex space-x-5 align-top">
      <span className="inline-block w-10">{label}</span>
      <textarea
        rows={5}
        {...props}
        className="w-52 p-2 border-gray-200 border rounded-md focus:outline-none resize-none"
      />
    </label>
  );
};

export default Textarea;

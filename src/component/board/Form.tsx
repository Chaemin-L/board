import { FormEventHandler } from "react";
import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";

interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Form = ({ onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 ">
      <Input label="제목" name="title" />
      <Textarea label="내용" name="content" />
      <Button type="submit" fullWidth>
        등록
      </Button>
    </form>
  );
};

export default Form;

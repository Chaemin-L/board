import { ChangeEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { lcStorage } from "../../../lib/lcStorage";
import Input from "../../../component/Input";
import Textarea from "../../../component/Textarea";
import Button from "../../../component/Button";
import { BoardType } from "../list";
import clsx from "clsx";

const BoardDetailPage = () => {
  const { state } = useLocation();
  const [data, setData] = useState<BoardType>({});
  const [editMode, setEditMode] = useState<boolean>(false);
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onEdit = () => {
    const updatedListData = lcStorage
      .get("boards")
      .map((board: BoardType) => (board.id === data.id ? data : board));
    lcStorage.set("boards", updatedListData);
    setEditMode(false);
  };

  const onDelete = () => {
    const updatedListData = lcStorage
      .get("boards")
      .filter((board: BoardType) => board.id !== data.id);
    lcStorage.set("boards", updatedListData);
    navigate("/boards");
  };

  useEffect(() => {
    setData(state);
  }, []);

  if (!state)
    return (
      <div>
        <span className="block">잘못된 접근입니다.</span>
        <Link to="/boards" className="items-center hover:underline inline-flex">
          게시판 목록으로 이동
          <svg
            className="inline"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L12.5858 12L9.29289 8.70711C8.90237 8.31658 8.90237 7.68342 9.29289 7.29289Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
    );

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-5 mt-10">
        <div className="space-y-5 h-[300px]">
          <Input
            name="title"
            disabled={!editMode}
            value={data.title}
            onChange={onChange}
            className="text-xl font-bold"
          />
          <Textarea
            rows={10}
            name="content"
            disabled={!editMode}
            value={data.content}
            onChange={onChange}
          />
        </div>
        <div className={clsx("flex justify-end gap-2", editMode && "hidden")}>
          <Button onClick={() => setEditMode(!editMode)} primary={false}>
            수정
          </Button>
          <Button onClick={onDelete}>삭제</Button>
        </div>
        <div className={clsx("self-end", !editMode && "hidden")}>
          <Button onClick={onEdit}>완료</Button>
        </div>
      </div>
      <Link
        to="/boards"
        className="block text-gray-800 text-center hover:underline"
      >
        목록으로
      </Link>
    </div>
  );
};

export default BoardDetailPage;

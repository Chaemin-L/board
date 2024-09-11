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
        잘못된 접근입니다.<Link to="/boards">게시판 목록으로 이동</Link>
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

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
    <div>
      <Link to="/boards">목록으로</Link>
      <div>
        this is BoardDetail
        <Input
          label="제목"
          name="title"
          disabled={!editMode}
          value={data.title}
          onChange={onChange}
        />
        <Textarea
          label="내용"
          name="content"
          disabled={!editMode}
          value={data.content}
          onChange={onChange}
        />
        <div className={clsx(editMode && "hidden")}>
          <Button onClick={() => setEditMode(!editMode)}>수정</Button>
          <Button onClick={onDelete}>삭제</Button>
        </div>
        <div className={clsx(!editMode && "hidden")}>
          <Button onClick={onEdit}>완료</Button>
        </div>
      </div>
    </div>
  );
};

export default BoardDetailPage;

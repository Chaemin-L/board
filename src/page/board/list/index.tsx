import { SyntheticEvent, useRef, useState } from "react";
import ListView from "../../../component/board/ListView";
import Form from "../../../component/board/Form";

export interface BoardType {
  id: number;
  title: string;
  content: string;
}

const BoardListPage = () => {
  const [listData, setListData] = useState<BoardType[]>([]);
  const [idx, setIdx] = useState<number>(0);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      content: { value: string };
    };
    const { title, content } = target;
    if (title.value && content.value) {
      setListData((prev: BoardType[]) => [
        ...prev,
        { id: idx, title: title.value, content: content.value },
      ]);
      setIdx(idx + 1);
    }
  };

  return (
    <div className="w-[500px] m-auto space-y-5">
      <h1 className="text-lg font-bold">등록폼</h1>
      <Form onSubmit={onSubmit} />
      <ListView listData={listData} />
    </div>
  );
};

export default BoardListPage;

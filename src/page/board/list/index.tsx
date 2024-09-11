import { SyntheticEvent, useEffect, useState } from "react";
import ListView from "../../../component/board/ListView";
import Form from "../../../component/board/Form";
import { lcStorage } from "../../../lib/lcStorage";

export interface BoardType {
  id: number;
  title: string;
  content: string;
}

const BoardListPage = () => {
  const [listData, setListData] = useState<BoardType[]>([]);
  const [idx, setIdx] = useState<number>(0);

  useEffect(() => {
    if (!lcStorage.isNull("boards")) {
      const data = lcStorage.get("boards");
      setListData(data);
    }
  }, []);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      content: { value: string };
    };
    const { title, content } = target;
    if (title.value && content.value) {
      const newListData = [
        ...listData,
        { id: idx, title: title.value, content: content.value },
      ];
      setListData(newListData);
      lcStorage.set("boards", newListData);
      setIdx(idx + 1);
    }
  };

  return (
    <div className=" space-y-10">
      <h1 className="text-lg font-bold">등록폼</h1>
      <Form onSubmit={onSubmit} />
      <ListView listData={listData} />
    </div>
  );
};

export default BoardListPage;

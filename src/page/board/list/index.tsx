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
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  useEffect(() => {
    if (!lcStorage.isNull("boards")) {
      const data = lcStorage.get("boards");
      const currentIdx = lcStorage.get("currentIdx");
      setListData(data);
      setCurrentIdx(currentIdx);
    } else {
      lcStorage.set("currentIdx", 0);
      setCurrentIdx(0);
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
        { id: currentIdx, title: title.value, content: content.value },
      ];
      setListData(newListData);
      setCurrentIdx(currentIdx + 1);
      lcStorage.set("boards", newListData);
      lcStorage.set("currentIdx", currentIdx + 1);
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

import { Link } from "react-router-dom";
import { BoardType } from "../../page/board/list";
import { memo } from "react";

const ListView = ({ listData }: { listData: BoardType[] }) => {
  return (
    <ul className="space-y-5">
      {listData.map((data) => {
        return <ListItem key={data.id} data={data} />;
      })}
    </ul>
  );
};

export default ListView;

const ListItem = memo(({ data: { id, title } }: { data: BoardType }) => {
  console.log(`/boards/${id}`);
  return (
    <li
      key={id}
      className="border border-slate-200 rounded-md p-2 transition-colors hover:bg-gray-200 hover:cursor-pointer"
    >
      <Link to={`/boards/${id}`} className="w-full  block">
        {title}
      </Link>
    </li>
  );
});

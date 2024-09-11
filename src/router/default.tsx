import { RouteObject } from "react-router-dom";
import BoardDetailPage from "../page/board/detail";
import BoardListPage from "../page/board/list";

const ROUTES: RouteObject[] = [
  { path: "/", element: <BoardListPage /> },
  { path: "/:id", element: <BoardDetailPage /> },
];

export default ROUTES;

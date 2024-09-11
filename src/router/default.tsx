import { RouteObject } from "react-router-dom";
import BoardDetailPage from "../page/board/detail";
import BoardListPage from "../page/board/list";

export const ROUTES: RouteObject[] = [
  { path: "/boards", element: <BoardListPage /> },
  { path: "/boards/:id", element: <BoardDetailPage /> },
];

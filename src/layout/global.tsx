import { Outlet } from "react-router-dom";

const GlobalLayout = () => {
  return (
    <div>
      {/** header */}
      <Outlet />
    </div>
  );
};

export default GlobalLayout;

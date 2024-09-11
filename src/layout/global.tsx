import { Outlet } from "react-router-dom";

const GlobalLayout = () => {
  return (
    <div className="p-10 w-[500px] m-auto">
      {/** header */}
      <Outlet />
    </div>
  );
};

export default GlobalLayout;

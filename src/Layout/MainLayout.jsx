import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      {/* outlets */}
      <div>
        <Outlet />
      </div>
      {/* footer */}
    </div>
  );
};

export default MainLayout;

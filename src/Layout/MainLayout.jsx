import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <div className="container mx-auto">
        <Navbar />
      </div>
      {/* outlets */}
      <div>
        <Outlet />
      </div>
      {/* footer */}
    </div>
  );
};

export default MainLayout;

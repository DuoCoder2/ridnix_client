import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <div className="container mx-auto md:mb-5">
        <Navbar />
      </div>
      {/* outlets */}
      <div className="container mx-auto px-0.5">
        <Outlet />
      </div>
      {/* footer */}
    </div>
  );
};

export default MainLayout;

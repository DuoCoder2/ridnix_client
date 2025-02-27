import { Route, Routes } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Service from "../pages/Service";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/service" element={<Service />} />
      </Route>
    </Routes>
  );
};

export default Router;

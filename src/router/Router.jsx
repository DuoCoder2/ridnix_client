import { Route, Routes } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;

import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "pages/Login";
import Registration from "pages/Registration";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<p>Not found</p>} />
      </Route>
    </Routes>
  );
};

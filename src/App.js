import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import ErrorComponent from "./Components/ErrorComponent";
import RegistrationComponent from "./Components/RegistrationComponent";
import Layout from "./Components/Layout";

import "./App.css";
import "antd/dist/reset.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<RegistrationComponent />} />
        <Route path="*" element={<ErrorComponent />} />
      </Route>
    </Routes>
  );
};

export default App;

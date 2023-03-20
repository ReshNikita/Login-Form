import Login from "./Login";
import "./App.css";
import "antd/dist/reset.css";
import { Routes, Route } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import RegistrationComponent from "./RegistrationComponent";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          {/*route does not have a path but has an index attribute. 
          That specifies this route as the default route for the parent route, which is /. */}
          <Route path="register" element={<RegistrationComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

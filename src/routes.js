import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserAdd, UserEdit, UserTable, UserView } from "./containers";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserTable />} />
      <Route path="/add" element={<UserAdd />} />
      <Route path="/view/:userId" element={<UserView />} />
      <Route path="/edit/:userId" element={<UserEdit />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
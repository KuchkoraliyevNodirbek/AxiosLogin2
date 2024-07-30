import { Route, Routes } from "react-router-dom";
import { Category } from "./pages/category";
import { MainLayout } from "./layout/main-layout";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Category />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

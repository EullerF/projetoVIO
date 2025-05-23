import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUsers from "./pages/ListUsers";
import ListEventos from "./pages/ListEvents";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/users" element={
            <ProtectedRoute>
              <ListUsers/>
            </ProtectedRoute>
          } />
          <Route path="/events" element={
            <ProtectedRoute>
              <ListEventos/>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { ProjectView } from "./pages/projects/ProjectView";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProjectView />} path="/projects" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

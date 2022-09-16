import "./App.css";
import { ListaTareas } from "./components/ListaTareas";
import { SubirTareas } from "./components/SubirTareas";
import { Nav } from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TareasContextProvider } from "./context/TareasContext";

function App() {
  return (
    <TareasContextProvider>
      <BrowserRouter>
        <Nav />
        <div className="App">
          <Routes>
            <Route path="/" element={<SubirTareas />} />
            <Route path="/lista" element={<ListaTareas />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TareasContextProvider>
  );
}

export default App;

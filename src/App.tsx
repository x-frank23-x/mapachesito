import { BrowserRouter, Routes, Route } from "react-router-dom";
import Libro from "./Screens/Libro";

function App() {
  return (
    <BrowserRouter basename="/mapachesito">
      <Routes>
        <Route path="/" element={<Libro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route
            path="/eventcalendar"
            element={<div>Event Calendar Page</div>}
          />
          <Route path="/sponsors" element={<div>Sponsors Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

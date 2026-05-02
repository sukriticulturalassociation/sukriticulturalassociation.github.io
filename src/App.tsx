import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/about-us/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ✅ All routes share layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/good-works" element={<div>About Page</div>} />
            <Route
              path="/event-calendar"
              element={<div>Event Calendar Page</div>}
            />
            <Route path="/sponsors" element={<div>Sponsors Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>

          {/* ❗ Admin without navbar/footer */}
          <Route path="/admin" element={<div>Admin Page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

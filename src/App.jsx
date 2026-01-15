import Nav from "./Nav";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudents from "./AddStudents";
import ViewDetails from "./ViewDetails";
import Register from "./Register";
import Contact from "./Contact";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-details" element={<AddStudents />} />
          <Route path="/view-details" element={<ViewDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
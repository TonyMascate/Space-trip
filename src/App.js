import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/destinations' element={<Destinations />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

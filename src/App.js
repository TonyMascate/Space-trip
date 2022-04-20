import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crew from "./pages/Crew";
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/destinations' element={<Destinations />}></Route>
        <Route path='/crew' element={<Crew />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

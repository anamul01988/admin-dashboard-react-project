
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/"  element={<Home />} />
      </Routes>
    </Router>
    // <>
    //     <Home></Home>
    // </>
  );
}

export default App;

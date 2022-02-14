
import { Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Signup from "./pages/SignUp";
import Signin from "./pages/SignIn";
function App() {
  return (
   
     <>
     <UserAuthContextProvider>
       <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/home" element={<ProtectedRoute>
           <Home/>
        </ProtectedRoute> } />
        <Route path="/dashboard"  element={<Dashboard />} />
        {/* <Route path="/"  element={<Home />} /> */}
        <Route path="/" element={<Signin/>}/>
         <Route path="/signup" element={<Signup/>}/>
      </Routes>
       </UserAuthContextProvider>
     </>
  
  );
}

export default App;

import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./authentication/Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Dashboard from "./Dashboard";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import Profile from "./authentication/Profile";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile"
import Dashboard from "./google-drive/Dashboard";
// import CenteredContainer from "./authentication/CenteredContainer";

function App() {
  return (
          <Router>
          <AuthProvider>
            <Routes>
              {/* Drive */}
              <Route path="/" element={<PrivateRoute Component={Dashboard} />} />
              <Route path="/folder/:folderId" element={<PrivateRoute Component={Dashboard} />} />

              {/* Profile */}
              <Route path="/user" element={<PrivateRoute Component={Profile} />} />
              <Route path="/update-profile" element={<PrivateRoute Component={UpdateProfile} />} />

              {/* Auth */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
          </Router>
  );
}

export default App;

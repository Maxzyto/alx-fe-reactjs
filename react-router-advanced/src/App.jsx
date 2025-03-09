import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import ProfileDetails from "./pages/profile/ProfileDetails";
import ProfileSettings from "./pages/profile/ProfileSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
        <Route path="./components/ProtectedRoute.jsx" element={<ProtectedRoute />} />
        <Route path='./pages/Profile.jsx' element={<Profile />} />
        <Route path='./pages/profile/ProfileDetails.jsx' element={<ProfileDetails />} />
        <Route path='./pages/profile/ProfileSettings.jsx' element={<ProfileSettings />} />

      </Routes>
    </Router>
  );
}

export default App;

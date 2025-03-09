import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Profile from "./components/Profile";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog-post/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound
          title="404"
          description="Page not found"
        />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

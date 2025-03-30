// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Root layout
import RootLayout from "./RootLayout";

//  Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import FreeAPI from "./pages/FreeAPI";
import Docs from "./pages/Docs";
import NotFound from "./pages/NotFound";
import GoogleLogin from "./components/GoogleLogin";
import Leaderboard from "./components/Leaderboard";
import Timeline from "./components/Timeline";
import UserFlow from "./components/UserFlow";
import PrivacyPolicy from "./components/Privacy";
import Terms from "./components/Terms";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/rules" element={<Timeline />} />
        <Route path="/user-flow" element={<UserFlow />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<GoogleLogin />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

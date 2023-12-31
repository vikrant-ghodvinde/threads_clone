import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "@/Components/Navigation/Navigation";
import { useSelector } from "react-redux";
const Login = lazy(() => import("@/Screens/Login/Login"));
const Register = lazy(() => import("@/Screens/Register/Register"));
const Home = lazy(() => import("@/Screens/Home/Home"));
const Search = lazy(() => import("@/Screens/Search/Search"));
const Activity = lazy(() => import("@/Screens/Activity/Activity"));
const Profile = lazy(() => import("@/Screens/Profile/Profile"));

function App() {
  const auth = useSelector((state) => state.token);
  return (
    <BrowserRouter>
      {auth && <Navigation />}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"Loading..."}>
              {auth ? <Home /> : <Login />}
            </Suspense>
          }
        />
        <Route
          path="/create"
          element={
            <Suspense fallback={"Loading..."}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/search"
          element={
            <Suspense fallback={"Loading..."}>
              <Search />
            </Suspense>
          }
        />
        <Route
          path="/activity"
          element={
            <Suspense fallback={"Loading..."}>
              <Activity />
            </Suspense>
          }
        />
        <Route
          path="/:username"
          element={
            <Suspense fallback={"Loading..."}>
              <Profile />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

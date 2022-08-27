import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
// dependencies
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import all the pages
import Home from "./pages/Home";
import GenerateRoom from "./pages/GenerateRoom";
import Editor from "./pages/Editor";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={1000} pauseOnFocusLoss={false} />
      <Switch>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/generare-room-id"
          element={<GenerateRoom />}
        ></Route>
        <Route exact path="/editor/:room_id" element={<Editor />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
}

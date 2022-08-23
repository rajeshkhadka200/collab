import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
// dependencies
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import all the pages
import Home from "./pages/Home";
import GenerateRoom from "./pages/GenerateRoom";
import Editor from "./pages/Editor";
import Profile from "./pages/Profile";

export default function Router() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={1000} pauseOnFocusLoss={false} />
      <Switch>
        <Route path="/" element={<Home />}></Route>
        <Route path="/generare-room-id" element={<GenerateRoom />}></Route>
        <Route path="/editor/:room_id" element={<Editor />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

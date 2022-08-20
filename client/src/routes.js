import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// import all the pages
import Home from "./pages/Home";
import GenerateRoom from "./pages/GenerateRoom";
import Editor from "./pages/Editor";
import Profile from "./pages/Profile";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />}></Route>
        <Route path="/generare-room-id" element={<GenerateRoom />}></Route>
        <Route path="/editor/:room_id" element={<Editor />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

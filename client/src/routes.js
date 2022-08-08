import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// import all the pages
import Home from "./pages/Home";
import GenerateRoom from "./pages/GenerateRoom";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />}></Route>
        <Route path="/generare-room-id" element={<GenerateRoom />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

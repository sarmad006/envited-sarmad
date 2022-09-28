

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Event from "./Pages/Event";
import CreateEvent from "./Pages/CreateEvent";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<CreateEvent/>}></Route>
      <Route path="/event" element={<Event/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

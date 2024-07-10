import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Routes/BlogPage.jsx";
import SignUp from "./components/accounts/SignUp.jsx";
import SignUp2 from "./components/accounts/SignUp2.jsx";
import SignIn from "./components/accounts/SignIn.jsx";
import Create from "./Routes/CreateEventsPage.jsx";
import Help from "./Routes/help-center/HelpCentrePage.jsx";
import Local from "./Routes/LocalEventsPage.jsx";
import Landing from "./Landing.jsx";
import SearchApp from "./Routes/SearchApp.jsx";
import Location from './Routes/Location'
import Tickets from './components/Admin/Tickets'
import Locate from "./Routes/Locate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/create" element={<Create />} />
      <Route path="/help" element={<Help />} />
      <Route path="/locate" element={<Local />} />
      <Route path="/locatePage" element={<Locate />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignUp2" element={<SignUp2 />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/SearchApp" element={<SearchApp />} />
      <Route path="/location" element={<Location />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/create-event" element={<Tickets />} />
    </Routes>
  </BrowserRouter>
);

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Routes/BlogPage.jsx";
import SignUp from "./components/accounts/SignUp.jsx";
import SignIn from "./components/accounts/SignIn.jsx";
import Create from "./Routes/CreateEventsPage.jsx";
import Help from "./Routes/HelpCentrePage.jsx";
import Local from "./Routes/LocalEventsPage.jsx";
import Landing from "./Landing.jsx";
import SearchApp from "./Routes/SearchApp.jsx";
import Location from './Routes/Location'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/create" element={<Create />} />
      <Route path="/help" element={<Help />} />
      <Route path="/local" element={<Local />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/SearchApp" element={<SearchApp />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  </BrowserRouter>
);

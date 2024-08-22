import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './components/pages/BlogPage';
import SignUp from "./components/auth/SignUp";
import SignUp2 from "./components/auth/SignUp2";
import SignIn from "./components/auth/SignIn";
import Create from "./components/Create/CreateEventsPage";
import Help from "./components/help-center/HelpCentrePage";
import Landing from "./components/pages/Landing";
import SearchApp from "./components/search/SearchApp";
import Location from './components/location/Location'
import Tickets from './components/pages/Tickets'
import Locate from "./components/location/Locate";
import LocalEvents from "./components/pages/LocalEvents";
import CreateOrganizer from "./components/organizer/CreateOrganizer"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/create" element={<Create />} />
      <Route path="/help" element={<Help />} />
      <Route path="/locatePage" element={<Locate />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignUp2" element={<SignUp2 />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/localevents" element={<LocalEvents />} />
      <Route path="/SearchApp" element={<SearchApp />} />
      <Route path="/location" element={<Location />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/create-event" element={<Tickets />} />
      <Route path="/create-organizer" element={<CreateOrganizer />} />
    </Routes>
  </BrowserRouter>
);

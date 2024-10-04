import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./components/auth/AuthContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './components/pages/BlogPage';
import SignUp from "./components/auth/SignUp";
import SignUp2 from "./components/auth/SignUp2";
import SignIn from "./components/auth/SignIn";
import Create from "./components/Create/CreateEventsPage";
import Help from "./components/help-center/HelpCentrePage";
import SearchApp from "./components/search/SearchApp";
import Location from './components/location/Location'
import CreateTickets from './components/Create/Tickets.jsx'
import Tickets from './components/pages/Tickets.jsx'
import Locate from "./components/location/Locate";
import LocalEvents from "./components/pages/LocalEvents";
import CreateOrganizer from "./components/organizer/CreateOrganizer"
import NavBar from "./components/navbar/NavBar.jsx";
import { UserProfile } from "./components/user-profile/UserProfile.jsx";
import { OrganizerProfile } from "./components/user-profile/OrganizerProfile.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/create" element={<Create />} />
        <Route path="/help" element={<Help />} />
        <Route path="/locatePage" element={<Locate />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUp2" element={<SignUp2 />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/localevents" element={<LocalEvents />} />
        <Route path="/SearchApp" element={<SearchApp />} />
        <Route path="/location" element={<Location />} />
        <Route path="/create-tickets" element={<CreateTickets />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/create-event" element={<Tickets />} />
        <Route path="/create-organizer" element={<CreateOrganizer />} />
        <Route path="/user_profile" element={<UserProfile />} />
        <Route path="/organizer_profile" element={<OrganizerProfile />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

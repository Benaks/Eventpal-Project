import UnsignedNav from "./UnsignedNav";
import SignedNav from "./SignedNav";
import OrganizerNav from "./OrganizerNav";
import { AuthContext } from "../auth/AuthContext"; 
import { useContext, useState, useMemo } from "react";

const NavBar = () => {
    const { navLoading, isLoggedIn, isOrganizer } = useContext(AuthContext);

let handleKeyPress;

const renderedNavbar = useMemo(() => {
  if (navLoading) {
    return <div className="spinner">Nav is Loading</div>;
  }
  if (!isLoggedIn) {
    return <UnsignedNav />;
  }
  return isOrganizer ? (
    <OrganizerNav handleKeyPress={handleKeyPress} />
  ) : (
    <SignedNav handleKeyPress={handleKeyPress} />
  );
}, [navLoading, isLoggedIn, isOrganizer]);
    
    return <div>{renderedNavbar}</div>;
}

export default NavBar
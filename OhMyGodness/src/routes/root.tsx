import '../SCSS/index.scss'
import Nav from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { DarkmodeProvider } from '../darkMode';


export default function Root() {
    return (
      <>
      <DarkmodeProvider>
        <Nav/>
      </DarkmodeProvider>
        <div id="content">
          <Outlet />
        </div>
      </>
    );
  }
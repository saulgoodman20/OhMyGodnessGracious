import '../SCSS/index.scss'
import Nav from "../Components/Navbar";
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
      <>
        <Nav/>
        <div id="content">
          <Outlet />
        </div>
      </>
    );
  }
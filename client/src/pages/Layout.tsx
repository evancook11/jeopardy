import { Outlet, Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

const Layout = () => {  
    return (
        <>
            <Navbar></Navbar>
            <Outlet />
        </>
    );
  }
  
  export default Layout;
  
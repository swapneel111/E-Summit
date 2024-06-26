import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from"./Navbar.jsx";
import Footer from "./Footer.jsx";
import Foot from "./Foot.jsx";
//import { Analytics } from '@vercel/analytics';

const Layout =()=> {
return (
<>
<Navbar/>
<Outlet/>
<Footer/>
<Foot/>

</>
);
};

export default Layout;
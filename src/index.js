import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from  "./pages/Home";
import Prizes from "./pages/Prizes";
import Team from "./pages/Team";
import AboutUs from "./pages/AboutUs";
import Timeline from "./pages/Timeline";
import Gallery from "./pages/Gallery";


export default function App() {
    return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home/>} />
    <Route path="AboutUs" element={<AboutUs/>}/>
    <Route path="Timeline" element={<Timeline/>}/>
    <Route path="Team" element={<Team/>}/>
    <Route path="Prizes" element={<Prizes/>}/>
    <Route path="Gallery" element={<Gallery/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
);
}

ReactDOM.render(<App />, document.getElementById("root"));
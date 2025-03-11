import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { About } from "pages/About";
import { Contacts } from "pages/Contacts";
import { Handbooks } from "pages/Handbooks";
import {FC} from "react";
import {Header} from "../../entities/Header/Header";
import {Footer} from "../../entities/Footer/Footer";

interface RoutesProps {}

export const AppRouter: FC<RoutesProps> = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/handbooks" element={<Handbooks />} />
            </Routes>
            <Footer/>
        </>
    );
};

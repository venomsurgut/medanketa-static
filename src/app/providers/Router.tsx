import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Home } from "pages/Home";
import { About } from "pages/About";
import { Contacts } from "pages/Contacts";
import { Handbooks } from "pages/Handbooks";
import {FC} from "react";
import {Header} from "../../entities/Header/Header";
import {Footer} from "../../entities/Footer/Footer";
import {Policy} from "../../pages/Policy";

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
                <Route path="/policy" element={<Policy />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer/>
        </>
    );
};

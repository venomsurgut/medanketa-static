import {Routes, Route, Navigate} from "react-router-dom";
import { Home } from "pages/Home";
import { About } from "pages/About";
import { Handbooks } from "pages/Handbooks";
import {FC} from "react";
import {Header} from "../../../entities/Header/Header";
import {Footer} from "../../../entities/Footer/Footer";
import {Policy} from "../../../pages/Policy";
import {PageGuard} from "./Guard";
import {Error} from "../../../pages/Error/ui/Error";
import {DynamicPage} from "../../../pages/Dynamic";
import {useGetPagesQuery} from "../../../pages/Dynamic/api/routes_api";
import {DynamicError} from "../../../pages/DynamicError/DynamicError";

interface RoutesProps {}

export const AppRouter: FC<RoutesProps> = () => {
    const {data: pages, isLoading} = useGetPagesQuery(null)
    if (isLoading) {
        return 'Загрузка путей'
    }
    if (!pages?.isActive) {
        return (
            <>
                <Header/>
                <Routes>
                    <Route path="/" element={<DynamicError text={pages?.text ?? 'Сайт на технических работах'} header={pages?.header ?? 'Сайт недоступен'} />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer/>
            </>
        )
    }
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<PageGuard page="about"><About /></PageGuard>} />
                <Route path="/handbooks" element={<PageGuard page="handbooks"><Handbooks /></PageGuard>} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/page/:id" element={<DynamicPage/>} />
                <Route path="/404" element={<Error />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer/>
        </>
    );
};

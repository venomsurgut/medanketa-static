import {FC, ReactNode} from "react";
import {Navigate} from "react-router-dom";

interface PageGuardProps {
    children: ReactNode
    page: string
}

export const PageGuard: FC<PageGuardProps> = ({ children, page }) => {
    // const [disabledPages, setDisabledPages] = useState<{ page: string; disabled: boolean }[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetchPages().then((data) => {
    //         setDisabledPages(data.default);
    //         setLoading(false);
    //     });
    // }, []);

    // if (loading) return <div>Loading...</div>;
    const isDisabled = false
    // const isDisabled = disabledPages.some((p) => p.page === page && p.disabled);

    return isDisabled ? <Navigate to="/404" replace /> : <>{children}</>;
};

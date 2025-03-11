import { FC } from "react";
import {Link, useLocation} from "react-router-dom";

interface BreadcrumbItem {
    name: string;
    path: string;
}

const titles: Record<string, string> = {
    "about": "О нас",
    "contacts": "Контакты",
    "services": "Услуги",
    "handbooks": "Справочники",
    "policy": 'Политика обработки персональных данных'
}


export const Breadcrumb: FC = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter(Boolean);

    const breadcrumbs: BreadcrumbItem[] = [
        { name: "Главная", path: "/" },
        ...pathSegments.map((segment, index) => ({
            name: titles[segment] || decodeURIComponent(segment),
            path: `/${pathSegments.slice(0, index + 1).join("/")}`
        }))
    ];

    return (
        <ul className="breadcrumbs-list" itemScope itemType="https://schema.org/BreadcrumbList">
            {breadcrumbs.map((crumb, index) => (
                <>
                    <li key={crumb.path} className="breadcrumbs-list__item" itemProp="itemListElement" itemScope
                        itemType="https://schema.org/ListItem">
                        <Link to={crumb.path} itemProp="item" className="breadcrumbs-list__link">
                            <span itemProp="name">{crumb.name}</span>
                            <meta itemProp="position" content={(index + 1).toString()}/>
                        </Link>
                    </li>
                    {index < breadcrumbs.length - 1 && (
                        <li className='breadcrumbs-list__item'>
                            <span className="breadcrumbs-list__sep">/</span>
                        </li>
                    )}
                </>
            ))}
        </ul>
    );
};

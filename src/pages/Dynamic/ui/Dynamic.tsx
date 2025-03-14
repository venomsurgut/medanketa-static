import { FC } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {SectionBlock, TextBlock} from "./Block/Base";
import {ContactBlock} from "./Block/Contact";
import styles from './Dynamic.module.scss'
import {Breadcrumb} from "../../../entities/Breadcrumb/ui/Breadcrumb";
import {useGetPagesQuery} from "../api/routes_api";


export const DynamicPage: FC = () => {
    const { id } = useParams();
    const {data: pages, isLoading} = useGetPagesQuery(null)

    if (isLoading) return <div>Loading...</div>;

    const pageData = pages && pages?.data && pages.data.find((p) => p.page === id);

    if (!pageData || !id) return <Navigate to="/404" replace />;

    return (
        <main className={`main post-page page post ${styles.main_content}`}>
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="description" content={pageData.seo.description}/>
                <meta name="keywords" content={pageData.seo.keywords.join(", ")}/>
            </Helmet>

            <section className="page-head">
                <div className="page-head__container container">
                    <Breadcrumb custom={{[id]: pageData.name,}}/>
                    <h1 className="post__title page-title">
                        {pageData.name}
                    </h1>
                </div>
            </section>
            <section className={'container'}>
                {pageData.content.map((block: any, index: number) => {
                    if (block.type === "text") return <TextBlock key={index} text={block.text}/>;
                    if (block.type === "section") return <SectionBlock key={index} text={block.text}/>;
                    if (block.type === "contacts") return <ContactBlock key={index} {...block} />;
                    return null;
                })}
            </section>
        </main>
)
    ;
};

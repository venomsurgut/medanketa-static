import {FC} from "react";
import {Breadcrumb} from "../../../entities/Breadcrumb/ui/Breadcrumb";
import {HandbookSection} from "../../Home/ui/HandbookSection";
import {base_handbook} from "../../../shared/const/handbook_sections";

export const Handbooks: FC = () => {
    return (
        <main className="main handbooks">
            <section className="page-head">
                <div className="page-head__container container">
                    <Breadcrumb/>
                    <h1 className="post__title page-title">
                        Справочники
                    </h1>
                </div>
            </section>
            <section className="page-body">
                <div className="page-body__container container">
                   <HandbookSection data={base_handbook}/>
                </div>
            </section>
        </main>
    )
}

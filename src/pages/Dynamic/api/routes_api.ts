import {api} from "../../../shared/api/rtkApi";
export interface FullPage {
    page: string;
    name: string;
    template?: string;
    seo: {
        index: boolean;
        sitemap: boolean;
        sidebar?: boolean;
        title: string;
        description: string;
        keywords: string[];
    };
    content: (
        | { type: 'section'; text: string }
        | { type: 'text'; text: string }
        | {
        type: 'contacts';
        icon: string;
        label: string;
        value: string;
    }
        )[];
}

const routesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPages: build.query<{isActive: boolean, text: string, header: string, data: FullPage[]}, null>({
            query: () => ({
                url: `pages/info`,
            }),
        }),
    })
})


export const { useGetPagesQuery } = routesApi;

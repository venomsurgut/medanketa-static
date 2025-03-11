import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {site} from "../const/const";
// import { TOKEN_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: `${site}/api/`,
	}),
	endpoints: () => ({}),
});

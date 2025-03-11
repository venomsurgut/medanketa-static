import { configureStore } from '@reduxjs/toolkit';
import {api} from "../../../shared/api/rtkApi";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer, // Добавляем RTK Query в reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

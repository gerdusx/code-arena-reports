import { configureStore } from "@reduxjs/toolkit";
import findingsReducer from "./slices/findingsSlice";

const store = configureStore({
    reducer: {
        findings: findingsReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

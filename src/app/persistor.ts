import { AnyAction, Reducer } from "@reduxjs/toolkit";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import {
    persistReducer,
} from "reduxjs-toolkit-persist";
import { rootReducer } from "./rootReducer";

const persistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel1,
    whitelist: ["products"],
};

export const _persistedReducer: Reducer<
    ReturnType<typeof rootReducer>,
    AnyAction
> = persistReducer<ReturnType<typeof rootReducer>, AnyAction>(
    persistConfig,
    rootReducer
);

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState();
const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

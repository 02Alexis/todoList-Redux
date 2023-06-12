import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "../reducer/todoListReducer";

const reducer = {
  //Aquí van todos los reducer de la aplicación
  allList: todoListReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
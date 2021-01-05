import { createStore } from "redux";
import reducer from "./Reducer.js";

export const editorData = createStore(reducer);
import About from "../pages/About";
import JsProject from "../pages/JsProject";
import Main from "../pages/Main";
import Projects from "../pages/Projects";
import ReactProject from "../pages/ReactProject";
import { routeNames } from "../utils/consts";

export const routes = [
    { element: <About />, path: routeNames.about },
    { element: <Main />, path: routeNames.main },
    { element: <Projects />, path: routeNames.projects },
    { element: <ReactProject />, path: routeNames.react },
    { element: <JsProject />, path: routeNames.js },
];

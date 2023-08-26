import {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import AppRouter from './router';
const root = createRoot(document.getElementById("app"))
root.render(<StrictMode><AppRouter/></StrictMode>)
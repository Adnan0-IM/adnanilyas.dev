import "@vitejs/plugin-react/preamble";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

hydrateRoot(document.querySelector("#app")!, <App />);
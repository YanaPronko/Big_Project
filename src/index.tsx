import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { StoreProvider } from "@/app/providers/StoreProvider";
import { ThemeProvider } from "@/app/providers/Theme";

import { App } from "./app/App";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Container root not found. Can't mount react app");
}
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
);

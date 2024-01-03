import "./style/output.css";
import "./style/style.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./providers/routerProvider";

function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <Router />
      </NextUIProvider>
    </BrowserRouter>
  );
}

export default App;

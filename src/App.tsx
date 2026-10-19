import { Suspense } from "react";
import "./App.css";
import NavbarViewComponent from "./app/core/layout/navbar/navbar.component.view";
import { useRoutes } from "react-router-dom";
import { routes } from "./app.routes";

function App() {
  const routedContent = useRoutes(routes);

  return (
    <>
      <NavbarViewComponent />
      <Suspense fallback={null}>{routedContent}</Suspense>
    </>
  );
}

export default App;

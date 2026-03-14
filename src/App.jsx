import { useEffect, useMemo } from "react";
import Home from "./pages/Home";
import GalaxyS26Buy from "./pages/GalaxyS26Buy";
import Galaxy26 from "./pages/Galaxy26";

function App() {
  const path = useMemo(() => window.location.pathname.replace(/\/+$/, "") || "/", []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.history.scrollRestoration = "manual";
    } catch {
      // ignore if not supported
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  if (path === "/smartphones/galaxy-s26-ultra/buy") {
    return <GalaxyS26Buy variant="ultra" />;
  }

  if (path === "/smartphones/galaxy-s26/buy") {
    return <GalaxyS26Buy variant="s26" />;
  }

  if (path === "/smartphones/galaxy-s26-ultra" || path === "/") {
    return <Galaxy26 />;
  }

  if (path === "/home") {
    return <Home />;
  }

  return <Galaxy26 />;
}

export default App;

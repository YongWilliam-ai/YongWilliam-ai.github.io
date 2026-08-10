/** Signal Path Terminal route shell: Markets at / and AI Engineering at /ai/. */
import Home from "./pages/Home";
import AIProfile from "./pages/AIProfile";
import CaseStudy from "./pages/CaseStudy";
import OwnerUsageDashboard from "./pages/OwnerUsageDashboard";

function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  if (pathname === "/owner/usage") return <OwnerUsageDashboard />;
  if (pathname.startsWith("/case/")) return <CaseStudy />;
  const isAIProfile = pathname.startsWith("/ai");
  return isAIProfile ? <AIProfile /> : <Home />;
}

export default App;

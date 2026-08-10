/** Signal Path Terminal route shell: Markets at / and AI Engineering at /ai/. */
import Home from "./pages/Home";
import AIProfile from "./pages/AIProfile";

function App() {
  const isAIProfile = typeof window !== "undefined" && window.location.pathname.startsWith("/ai");
  return isAIProfile ? <AIProfile /> : <Home />;
}

export default App;

import { useState } from "react";
import Preloader from "./components/Preloader";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "lucide-react";
import Navbar from "./components/NavBar";
const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-screen flex items-center justify-center">
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
      <Router>
        <Navbar/>
       <main className="mt-16">
       <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
       </main>
      </Router>
      )}
    </div>
  );
};

export default App;


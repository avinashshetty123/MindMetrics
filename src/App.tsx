import { useState } from "react";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-screen flex items-center justify-center">
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <div className="text-center text-white text-4xl font-bold p-10">
          Welcome to the App
        </div>
      )}
    </div>
  );
};

export default App;


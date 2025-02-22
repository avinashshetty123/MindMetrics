import React, { useEffect, useState } from "react";
import axios from "axios";

interface FitData {
  [key: string]: any; // Adjust this to match the actual Google Fit API response structure
}

const Fitpage: React.FC = () => {
  const [data, setData] = useState<FitData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/fit-data", { withCredentials: true })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Google Fit data:", err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="fit-container">
      <h1>Google Fit Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
      <a href="http://localhost:5000/auth/google">
        <button className="login-button">Login with Google</button>
      </a>
    </div>
  );
};

export default Fitpage;

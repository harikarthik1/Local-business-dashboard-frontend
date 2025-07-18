import { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBusinessData = async (name, location, industry) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/business-data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, location, industry }),
      });
      const data = await response.json();
      setBusinessData({ ...data, name, location, industry });
    } catch (err) {
      console.error("Fetch failed:", err);
      alert("Failed to fetch data.");
    }
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    if (!businessData) return;
    const { name, location, industry } = businessData;
    try {
      const response = await fetch(
        `http://localhost:5000/regenerate-headline?name=${name}&location=${location}&industry=${industry}`
      );
      const data = await response.json();
      setBusinessData((prev) => ({ ...prev, headline: data.headline }));
    } catch (err) {
      alert("Failed to regenerate headline.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 italic text-center">
        Local Business Dashboard
      </h1>

      <div className="flex flex-col items-center md:items-center md:justify-center lg:flex-row lg:items-start gap-6 w-full max-w-4xl mx-auto">
        <BusinessForm onSubmit={fetchBusinessData} />

        {loading && (
          <div className="flex items-center justify-center min-h-[200px] w-full lg:w-[28rem] bg-white rounded shadow-md">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3 text-blue-600 font-medium">Loading...</span>
          </div>
        )}

        {!loading && businessData && (
          <BusinessCard data={businessData} onRegenerate={regenerateHeadline} />
        )}
      </div>
    </div>
  );
}

export default App;

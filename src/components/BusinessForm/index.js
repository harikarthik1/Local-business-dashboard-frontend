import { useState } from "react";

const BusinessForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !location) {
      alert("Please enter both business name, location.");
      return;
    }
    onSubmit(name, location, industry);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700">Business Name</label>
        <input
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Business Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location of the Business"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Industry</label>
        <select
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        >
          <option value="general">General</option>
          <option value="bakery">Bakery</option>
          <option value="salon">Salon</option>
          <option value="cafe">Café</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition justify-center mx-auto block"
      >
        Submit
      </button>
    </form>
  );
};

export default BusinessForm;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateApplication() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");
  const [appliedDate, setAppliedDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5181/api/applications", {
      company,
      position,
      status,
      appliedDate
    })
    .then(() => navigate("/"))
    .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input type="text" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} className="border p-2 w-full" required />
      <input type="text" placeholder="Position" value={position} onChange={e => setPosition(e.target.value)} className="border p-2 w-full" required />
      <input type="text" placeholder="Status" value={status} onChange={e => setStatus(e.target.value)} className="border p-2 w-full" required />
      <input type="date" value={appliedDate} onChange={e => setAppliedDate(e.target.value)} className="border p-2 w-full" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Add Application</button>
    </form>
  );
}

export default CreateApplication;

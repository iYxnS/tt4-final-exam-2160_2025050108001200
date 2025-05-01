import { useEffect, useState } from "react";
import axios from "axios";

function ApplicationList() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5181/api/applications")
      .then(response => setApplications(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-2">Your Applications</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id} className="border p-2 mb-2">
            <strong>{app.company}</strong> - {app.position} - {app.status} ({new Date(app.appliedDate).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApplicationList;

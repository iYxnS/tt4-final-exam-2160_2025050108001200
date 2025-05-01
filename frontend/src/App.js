import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ApplicationList from "./components/ApplicationList";
import CreateApplication from "./components/CreateApplication";

function App() {
    return (
        <Router>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Job Application Tracker</h1>
                <nav className="mb-4">
                    <Link to="/" className="mr-4 text-blue-600">Applications</Link>
                    <Link to="/create" className="text-blue-600">Add New</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<ApplicationList />} />
                    <Route path="/create" element={<CreateApplication />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

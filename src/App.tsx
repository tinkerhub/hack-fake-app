import { Feed, Home, Login, Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Feed />} />
            </Routes>
        </Router>
    );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Finances from './pages/Finances';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/expenses" element={<Finances />} />
            </Routes>
        </Router>
    );
}
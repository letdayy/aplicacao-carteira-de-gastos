import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Expenses from './pages/Expenses';
import Home from './pages/Home';
import Income from './pages/Income';
import NoPage from './pages/NoPage';



export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/income" element={<Income />} />
                
            </Routes>
        </Router>
    );
}
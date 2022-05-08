import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';

import '../assets/css/reset.css';
import '../assets/css/styles.css';

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignInPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                <Route path='/home' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}
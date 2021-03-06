import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from '../contexts/UserContext';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import NewIncome from './NewIncome';
import NewExpense from './NewExpense';

import '../assets/css/reset.css';
import '../assets/css/styles.css';

export default function App() {
    const [user, setUser] = useState({});

    return(
    <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
            <Routes>
                <Route path='/sign-in' element={<SignInPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/new-income' element={<NewIncome />} />
                <Route path='/new-expense' element={<NewExpense />} />
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
    );
}
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Result from './pages/Result';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/result' element={<Result />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
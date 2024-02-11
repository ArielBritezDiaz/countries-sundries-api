import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

import PageIndex from './Pages/PageIndex/PageIndex.jsx';
import PageCountries from './Pages/PageCountries/PageCountries.jsx';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageIndex />} />
                <Route path='/countries' element={<PageCountries />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
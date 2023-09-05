import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/Auth/'
ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<AuthPage />} />
        </Routes>

    </BrowserRouter>

)

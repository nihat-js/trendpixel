import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/Auth/'
import { HomePage } from './pages/Home/'
import { UserPage } from './pages/User'
import { Provider } from 'react-redux'
import { store } from './store/index'



function checkAuth(){

}


ReactDOM.createRoot(document.getElementById('root')).render(



    <Provider   store={store}>
        <BrowserRouter>
            
            <Routes>
                
                <Route path="/" element={<HomePage />} />
                <Route path="/accounts/auth" element={<AuthPage />} />
                <Route path='/:username' element={<UserPage />} />
            </Routes>

        </BrowserRouter>
    </Provider>



)

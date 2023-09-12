import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/Auth/'
import { HomePage } from './pages/Home/'
import { UserPage } from './pages/User'
import { Provider } from 'react-redux'
import { store } from './store/index'
import { AuthRoute } from "./routes/AuthRoute"
import {UserLayout} from "./components/Layout/User.jsx";


function checkAuth() {

}


ReactDOM.createRoot(document.getElementById('root')).render(



    <Provider store={store}>
        <BrowserRouter>

            <Routes>
                <Route path="/accounts/auth" element={<AuthPage />} />
            </Routes>

            <AuthRoute>
                <Routes >
                    <Route path="/" element={<UserLayout children={<HomePage/>}  />}  />
                    <Route path='/:username' element={<UserLayout children={<UserPage/>} />} />
                </Routes>
            </AuthRoute>



        </BrowserRouter>
    </Provider>



)

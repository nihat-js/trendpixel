import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {AuthPage} from './pages/Auth/'
import {HomePage} from './pages/Home/'
import {UserPage} from './pages/User'
import {Provider} from 'react-redux'
import {store} from './store/index'
import {AuthRoute} from "./routes/AuthRoute"
import {UserLayout} from "./components/Layout/User.jsx";
import {NotFoundPage} from "./pages/NotFound/index.jsx";
import {LogoutPage} from "./pages/Logout/index.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>

      <Routes>
        <Route path="/accounts/auth" element={<AuthPage/>}/>
        <Route path="/accounts/logout" element={<LogoutPage/>}/>
      </Routes>

      <AuthRoute>
        <Routes>
          <Route path="/" element={<UserLayout children={<HomePage/>}/>}/>
          <Route path='/:username' element={<UserLayout children={<UserPage/>}/>}/>
        </Routes>
      </AuthRoute>
      <Routes>
      {/*<Route path='/*' element={<NotFoundPage/>}/>*/}

      </Routes>
    </BrowserRouter>
  </Provider>
)

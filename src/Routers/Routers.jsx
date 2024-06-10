import React from 'react'
import Trading from "../Components/Trading"
import Platforms from "../Components/Platforms"
import Tools from "../Components/Tools"
import Account from "../Components/Account_types"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import App from '../App'
// import NoPage from './NoPage'
import Login from "../Login_up/login"

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    
                    <Route index element={<App />} />
                    <Route path="trading" element={<Trading />} />
                    <Route path="platforms" element={<Platforms />} />
                    <Route path="tools" element={<Tools />} />
                    <Route path="account" element={<Account />} />
                    <Route path="login" element={<Login />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers
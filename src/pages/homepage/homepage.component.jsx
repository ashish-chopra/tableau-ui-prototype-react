import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../components/home/home.component';
import History from '../../components/history/history.component';
import Header from '../../components/header/header.component';
import SidebarMenu from '../../components/sidebar-menu/sidebar-menu.component';
import Detail from '../../components/detail/detail.component';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <div className="app-container">
                <SidebarMenu></SidebarMenu>
                <div className="right-box">
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/detail/:id" element={<Detail />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
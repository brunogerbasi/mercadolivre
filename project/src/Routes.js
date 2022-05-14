
import Login from 'Pages/Login';
import ProductsList from 'Pages/ProductsList';
import React from 'react';
import { Routes, Route, } from 'react-router-dom';

function Routers() {

    return (

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
}

export default Routers;
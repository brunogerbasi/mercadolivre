
import React from 'react';
import Login from 'Pages/Login';
import Product from 'Pages/Product';
import ProductsList from 'Pages/ProductsList';

import { Routes, Route, Navigate, } from 'react-router-dom';
import { AuthProvider, AuthContext } from 'context/auth';
import { useContext } from 'react';
import Load from 'Components/Load';

const Routers = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)
        
        if (loading) {
            return <Load />
        }

        if (!authenticated) {
            return <Navigate to="/login" />
        }
        return children;
    }
    return (
        <AuthProvider >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="products" element={
                    <Private><ProductsList /></Private>
                } />
                <Route path="product-detail" element={
                    <Private><Product /></Private>
                } />
                <Route path="*" element={<Login />} />
            </Routes>
        </AuthProvider>
    )
}

export default Routers;
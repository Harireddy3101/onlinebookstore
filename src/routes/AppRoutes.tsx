import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart } from '../components/Cart/Cart';
import { Discover } from '../components/Discover/Discover';
import { LandingPage } from '../components/LandingPage/LandingPage';
import { ProductDetails } from '../components/ProductDetails/ProductDetails';
import { SearchProducts } from '../components/SearchProducts/SearchProducts';
import Signin from '../components/Signin/Signin';
import Signup from '../components/Signup/Signup';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/SearchProducts" element={<SearchProducts />} />
        </Routes>
    );
};

export default AppRoutes; 
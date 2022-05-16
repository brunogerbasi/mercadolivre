import React, { useEffect, useState } from 'react';
import CardProducts from 'Components/CardProducts';
import Footer from 'Components/Footer';
import Header from 'Components/Header';
import MenuCategory from 'Components/MenuCategory';
import SearchBar from 'Components/SearchBar';

import { ContainerCardProducts, NavBar, ProductContainer, ProductMain } from './styles';
import ScrollButton from 'Components/BtnScrollTop';

function ProductsList() {
    const [btnToggleMenu, setBtnToggleMenu] = useState(true)

    useEffect(() => {
        resizeWindow ()

        window.onresize = function(){            
            resizeWindow ()            
        };
    },[])

    function resizeWindow () {
        if (window.matchMedia("(min-width:781px)").matches) {           
            setBtnToggleMenu(true)            
        } else{
            setBtnToggleMenu(false)
        }  
    }    

    return (
        <>
            <Header />

            <ProductMain>
                <ProductContainer>
                    <NavBar>
                        <SearchBar
                            btnToggleMenu={btnToggleMenu}
                            setBtnToggleMenu={setBtnToggleMenu}
                        />
                        {
                            btnToggleMenu ?
                                <MenuCategory                                    
                                    setBtnToggleMenu={setBtnToggleMenu}
                                />
                            : <></>
                        }

                    </NavBar>
                    <ContainerCardProducts>
                        <CardProducts />
                    </ContainerCardProducts>

                </ProductContainer>
            </ProductMain>
            <Footer />
            <ScrollButton />
        </>
    );
}

export default ProductsList;
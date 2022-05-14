import CardProducts from 'Components/CardProducts';
import Footer from 'Components/Footer';
import Header from 'Components/Header';
import MenuCategory from 'Components/MenuCategory';
import SearchBar from 'Components/SearchBar';
import React, {useState} from 'react';
import { ContainerCardProducts, NavBar, ProductContainer, ProductMain } from './styles';

function ProductsList() {
   
    const [stateIdCatg, setStateIdCatg] = useState({
        id: "MLB5672",
        name: "Acessórios para Veículos"
    })

    return (
        <>
            <Header />

            <ProductMain>
                <ProductContainer>
                    <NavBar>
                        <SearchBar 
                            stateIdCatg={stateIdCatg}
                            setStateIdCatg={setStateIdCatg}
                        /> 
                        <MenuCategory 
                            stateIdCatg={stateIdCatg}
                            setStateIdCatg={setStateIdCatg}
                        />
                    </NavBar>
                    <ContainerCardProducts>
                        <CardProducts 
                            stateIdCatg={stateIdCatg}
                            setStateIdCatg={setStateIdCatg}
                        />
                    </ContainerCardProducts>
                    
                </ProductContainer>
            </ProductMain>

            <Footer />
        </>
    );
}

export default ProductsList;
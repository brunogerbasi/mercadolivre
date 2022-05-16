import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productState } from "store/Product/Product.actions.js"
import { ContainerBar, ContainerMenuBar, ToggleMenu } from './styles';
import { HiSearch } from "react-icons/hi"
import { useNavigate } from 'react-router-dom';
import { HiMenuAlt1 } from "react-icons/hi"

import api from 'services/api';

function SearchBar({ btnToggleMenu, setBtnToggleMenu }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [stateValue, setStateValue] = useState("")


    function searchInput(e) {
        setStateValue(e.target.value)
    }

    function handleClick(parans) {
        getProducts();
    }

    function handleKeyDown(parans) {
        if (parans.keyCode === 13) {
            getProducts();
        }
    }

    function getProducts() {
        api

            .get("/sites/MLB/domain_discovery/search?limit=1&q=" + stateValue)
            .then((response) => {

                dispatch(productState({
                    id: response.data[0].category_id,
                    name: response.data[0].category_name
                }));

                navigate("/products");
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);

            });
    }

    return (
        <>
            <ContainerMenuBar>
                <ToggleMenu
                    onClick={() => setBtnToggleMenu(!btnToggleMenu)}
                >
                    <HiMenuAlt1 />
                </ToggleMenu>
                <ContainerBar>
                    <input type="text"
                        onChange={(e) => searchInput(e)}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                    <button type='button'
                        onClick={() => handleClick(stateValue)}
                    >
                        <span><HiSearch /></span>
                    </button>
                    <p></p>
                </ContainerBar>
            </ContainerMenuBar>
        </>
    );
}

export default SearchBar;
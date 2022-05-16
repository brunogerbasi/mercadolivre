import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productState } from "store/Product/Product.actions.js"
import api from 'services/api';
import { useNavigate } from 'react-router-dom';

import { CategoryContainer } from './styles';

function MenuCategory({ setBtnToggleMenu }) {
    const dispatch = useDispatch();

    const [respAPI, setRespAPI] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        api
            .get("/sites/MLB/categories")
            .then((response) => {
                setRespAPI(response.data);
            })
            .catch((err) => {
                
            });
    }, []);

    function HandleCategoryID(id, name) {
        dispatch(productState({
            id: id,
            name: name
        }));

        if (window.matchMedia("(min-width:781px)").matches) {
            setBtnToggleMenu(true)
        } else {
            setBtnToggleMenu(false)
        }

        localStorage.setItem("categoria", id)

        navigate("/products");
    }




    return (
        <CategoryContainer>
            <h3>Categories</h3>
            <p></p>
            <ul>
                {
                    respAPI?.map((ctg) => (
                        <li key={ctg.id}
                            onClick={() => HandleCategoryID(ctg.id, ctg.name)}
                        >
                            <button type='button'>{ctg.name}</button>
                        </li>
                    ))
                }
            </ul>
        </CategoryContainer>


    );
}

export default MenuCategory;
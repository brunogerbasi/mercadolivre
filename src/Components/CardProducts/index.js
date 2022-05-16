import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productOverview } from "store/Overview/Overview.actions.js"
import { ContainerCard, ContainerPrice, Item } from './styles';

import { useNavigate } from 'react-router-dom';

import api from 'services/api';
import Load from 'Components/Load';
import HeartIcon from 'Components/HeartIcon';


function CardProducts() {

    const dispatch = useDispatch();
    const storeProduct = useSelector(state => state);

    const navigate = useNavigate();
    const [respAPI, setRespAPI] = useState();
    const [isLoad, setIsLoad] = useState(false); 
    

    useEffect(() => {    
         
        setIsLoad(true)        
        api
            //.get("/sites/MLB/search?category=" + localStorage.getItem("categoria") || storeProduct.product.id) 
            .get("/sites/MLB/search?category=" + storeProduct.product.id)
            .then((response) => {
                setRespAPI(response.data.results);
                setIsLoad(false);
            })
            .catch((err) => {                
                setIsLoad(false);
            });
    }, [storeProduct]);

    function handleClickProduct(id) {        
        dispatch(productOverview({
            id: id,
        }));

        localStorage.setItem("product", id);
        navigate("/product-detail");
    }



    return (
        <>
            <ContainerCard>                

                {

                    respAPI?.map((ctg, id) => (
                        <Item key={id}>
                            <button type='button'
                                onClick={() => handleClickProduct(ctg.id)}
                            >
                                <img src={ctg.thumbnail} alt={ctg.title} />
                                <h2>{ctg.title}</h2>
                                <ContainerPrice>
                                    <p>R$ <span>{ctg.price}</span></p>
                                </ContainerPrice>
                            </button>
                            <HeartIcon />

                        </Item>
                    ))
                }

            </ContainerCard>
            {
                isLoad &&
                <Load />
            }

        </>
    );
}

export default CardProducts;
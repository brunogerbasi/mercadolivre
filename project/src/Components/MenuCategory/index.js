import React, { useState, useEffect } from 'react';
import { CategoryContainer } from './styles';
import api from 'services/api';

function MenuCategory({ stateIdCatg, setStateIdCatg}) {
    const [respAPI, setRespAPI] = useState();

    useEffect(() => {
        api
            .get("/sites/MLB/categories")
            .then((response) => {
                setRespAPI(response.data);                
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    function HandleCategoryID(id, name){        
        setStateIdCatg({ ...stateIdCatg,
            id : id,
            name : name
        })
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
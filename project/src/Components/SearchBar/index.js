import React, { useState } from 'react';
import { ContainerBar } from './styles';
import { HiSearch } from "react-icons/hi"

import api from 'services/api';

function SearchBar({stateIdCatg, setStateIdCatg}) {
    
    const [stateValue, setStateValue] = useState("")
    
    function searchInput(e) {
        setStateValue(e.target.value)
    }

    function handleClick(parans) {        
        getProducts();
    }

    function handleKeyDown(parans) {
        if(parans.keyCode === 13){
            //console.log("enter: " + stateValue)
            getProducts();
        }        
    }    

    function getProducts() {
        api
        
            .get("/sites/MLB/domain_discovery/search?limit=1&q=" + stateValue)
            .then((response) => {
                   
                setStateIdCatg({ ...stateIdCatg,
                    id : response.data[0].category_id,
                    name : response.data[0].category_name
                })
                
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
                
            });
    }

    return (
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
    );
}

export default SearchBar;
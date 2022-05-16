import styled from 'styled-components'

export const ProductMain = styled.main`    
    min-height: calc(100vh - 8rem) ;
    background-color: #ededed ;
    padding: 2rem 1rem ;
`;

export const ProductContainer = styled.section`
    width: 100% ;
    max-width: 1280px ;    
    margin: 0 auto ;
    display: flex ;
    align-items: start;
    gap: 1.5rem;
`;

export const NavBar = styled.div`
    width: 100% ;
    max-width: 240px ;

    @media (max-width: 780px) {        
        position: fixed;
        max-width: 100%;
        width: 100%;
        z-index: 999;
        background-color: #c9c9c9;
        min-height: 66px;
        padding: 10px;
        bottom: 0;
        left: 0;
    }

`;

export const ContainerCardProducts = styled.div`
    width: 100% ;
`;
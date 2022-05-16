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

export const ContainerProductDetail = styled.div`
    width: 100% ;
`;

export const InfoProductContainer = styled.div`
    display: flex ;
    margin-bottom: 2rem ;

    @media (max-width: 780px) {
        display: block ;
    }
`;

export const ImageProductContainer = styled.div`
    width: 65% ;
    @media (max-width: 1024px) {
        width: 55% ;
    }
    @media (max-width: 780px) {
        width: 100% ;
    }
`;

export const OverviewInfo = styled.div`
    width: 35% ;
    padding-left: 2rem ;
    @media (max-width: 1024px) {
        width: 45% ;
    }

    @media (max-width: 780px) {
        width: 100% ;
        padding-left: 0px ;
        text-align: center ;
    }

    h3{
        margin: 2rem 0 ;
        span{
            color: #2A3376;
            font-size: 2rem
        }
    }
    
`;

export const OverviewInfoBts = styled.div`
    
    button{
        border-radius: 6px ;
        padding: 10px 18px ;
        font-size: 1rem ;
        font-weight: bold ;
        border: 1px solid #191919;
        cursor: pointer;
        transition:  0.3s;
        margin-bottom: 0.6rem ;
        
        &:first-of-type{
            margin-right: 1rem ;
            color: #FFFFFF ;
            background: #3483fa;
            border: solid 1px #3483fa ;            
        }

        &:hover{
            background: #2A3376;
            color: #FFFFFF ;
        }
    }
`;

export const MenuTab = styled.div`
    text-align: center;
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    button{
        border: none;
        background: none;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        color: #2A3376;
        &:hover{
            color: #191919;
        }
    }
    h3{        
        span{
            color: #191919 ;
        }
    }
`;



export const DescritionRating = styled.div`
    background-color: #FFFFFF;
    padding: 2rem;
    width: calc(100% - 70px) ;
    float: right;
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    clear: both ;

    @media (max-width: 780px) {
        float: none ;
        width: 100% ;
    }
`;

export const FullDescription = styled.div`
    
`;


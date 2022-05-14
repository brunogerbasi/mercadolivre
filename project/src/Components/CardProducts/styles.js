import styled from "styled-components"

export const ContainerCard = styled.div `    
    background-color: #FFFFFF ;
    border: solid 1px #c9c9c9c9;
    padding: 1rem ;
    display: flex ;
    flex-wrap: wrap ;
    align-items: center ;
    justify-content: center;
    gap: 1rem;
`;

export const Item = styled.div `
    position: relative; ;
    border: solid 1px #c3c3c3c3;
    padding: 0.5rem;
    width: calc(100% / 4 - 1rem) ;
    text-align: center;    

    button{
        background: none ;
        border: none ;
        
    }
    
    img{     
        width: 100% ;
        height: 200px ;
        object-fit: cover;
        margin-bottom: 5px ;
        cursor: pointer;
        transition: 0.3s ;
        &:hover {
            transform: scale(1.03, 1.03) ;
            transition: 0.3s ;
        }
    }

    h2{
        margin: 0;
        margin-bottom: 0.75rem;
        font-size: 0.82rem;
        min-height: 2.6rem;
        cursor: pointer;
    }
    
    
`;

export const ContainerPrice = styled.div `
    text-align: center;
    p{
        margin: 0;
        cursor: pointer;
        font-size: 0.9rem;
        color:#242D7B;    
        span{
            font-weight: bold;
            font-size: 1.1rem;            
        }    
    }
`;
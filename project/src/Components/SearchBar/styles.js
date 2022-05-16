import styled from "styled-components"




export const ContainerMenuBar = styled.div`
    @media (max-width: 780px) {
        display: flex ;
        justify-content: space-between ;
        align-items: center ;
    }
`
export const ContainerBar = styled.div`
    display:flex ;
    align-items: center ;
    margin-bottom: 1rem ;

    @media (max-width: 780px) {
        width: calc( 100% - 50px) ;
        margin-bottom: 0 ;
    }

    input{
        width: calc(100% - 40px) ;
        height: 32px ;
        border: solid 1px #c9c9c9c9;
        padding: 0 0.5rem ;
    }
    button{
        width: 40px ;
        height: 32px ;
        border: solid 1px #c9c9c9c9;
        cursor: pointer ;
        transition: 0.5s;
        &:hover{
            background-color: #FFFFFF ;
            transition: 0.5s;
        }

        span{
            font-size: 1.2rem;
        }

    }
`;


export const ToggleMenu = styled.div`
    font-size: 28px ;
    line-height: 28px ;
    padding-top: 2px ;
    cursor: pointer ;
    @media (min-width: 781px) {
        display: none ;        
    }
`

import styled from "styled-components"

export const ContainerBar = styled.div`
    display:flex ;
    align-items: center ;
    margin-bottom: 1rem ;

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
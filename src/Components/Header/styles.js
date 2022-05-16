import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: #fff059 ;
    height: 3.5rem;
    display: flex ;
    align-items: center ;
    justify-content: center ;
    img{
        max-width: 100% ;
    }
`;
export const HeaderContainerLog = styled.header`
    background-color: #fff059 ;    
    div{
        height: 3.5rem;    
        display: flex ;
        align-items: center ;
        justify-content: space-between ;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
    }
    img{
        max-width: 100% ;
    }
    button{
        border-radius: 6px;
        padding: 5px 13px;
        font-size: 0.8rem;
        font-weight: bold;
        border: 1px solid #191919;
        cursor: pointer;  
        display : flex ;
        align-items: center ;
        justify-content: center ;
        gap: 5px;
        transition: 0.3s ;
        &:hover{
            background: #2A3376;
            color: #FFFFFF;
            transition: 0.3s ;
        }
        span{
            font-size: 1rem;
        }
    }
`;
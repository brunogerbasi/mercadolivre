import styled from "styled-components"

export const ContainerHeart = styled.div`    
    position: absolute;
    right: 1px;
    top: 1px;
    width: 24px;
    height: 24px;
    color: #3483fa;
    font-size: 20px;    
    cursor: pointer;
    transition: 0.2s ;
    &:hover{
        font-size: 22px;
        transition: 0.2s ;
    }

    &.active{
        span{
            svg{
                fill: #3483fa;
            }
        }
    }
`;
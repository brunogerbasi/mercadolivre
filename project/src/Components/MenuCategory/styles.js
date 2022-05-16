import styled from 'styled-components'

export const CategoryContainer = styled.nav`    
    background-color: #FFFFFF ;
    border: solid 1px #c9c9c9c9;
    width: 100% ;    
    @media (max-width: 780px) {        
        position: fixed;
        bottom: 65px;
        left: 0;
        width: 100%;
        max-height: calc(100vh - 65px);
        overflow-y: scroll;
    }
    h3{
        margin: 0;
        padding: 1rem ;
    }
    ul{
        margin:0 ;
        padding: 0 ;
        li{
            list-style:none ;
            border-bottom: solid 1px #c3c3c3c3 ;
            padding: 0.5rem 1rem ;      
            cursor: pointer;     
            
            a, button{
                width: 100% ;                
                color: #333333;    
                transition: 0.5s;   
                border:none;
                background: none;     
                cursor: pointer;
                text-align: left; 
                font-size: 0.95rem;                  
            }

            &:hover{
                a, button{
                    color: #CCCCCC;
                    transition: 0.5s;
                } 
            }

            &:last-of-type{
                display: none ;
            }
        }
    }
`;

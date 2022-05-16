import styled from 'styled-components'

export const MainContainer = styled.main`
    min-height: calc(100vh - 7rem) ;
    background: linear-gradient(0deg, rgba(237,237,237,1) 0%, rgba(237,237,237,1) 70%, rgba(255,240,89,1) 70%, rgba(255,240,89,1) 100%);
    padding-top: 5rem ;

    @media  (max-width: 780px ) {
        background:  rgba(237,237,237,1);
        display: flex ;
        justify-content: center ;
        align-items: center ;
        padding: 1rem ;
    }
`;

export const CardLogin = styled.div`
    max-width: 426px;
    width: 100% ;
    margin: 0 auto ;    
    box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 15%);    
    padding: 2rem 4rem;
    background-color: #FFFFFF ;
    border-radius: 6px;

    h1{
        font-size: 1.5rem;
    }

    form{
        label{
            margin-bottom:5px ;
            width:100% ;
            display: block ;
            font-size: 0.875rem;
        }
        input{
            min-height: 48px ;
            font-size: 1rem ;
            line-height: 1.5rem ;
            width: 100% ;
            border-radius:6px ;
            border:solid 1px #BFBFBF ;
            padding: 0.8125em 0.75em;
            margin-bottom: 1rem ;
        }
        button{
            margin: 0.85rem 0 ;
            background-color: #3483fa;
            border-color: transparent;
            color: #fff;
            width: 100% ;
            border-radius: 6px ;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            height: 48px;
            line-height: 48px;
            padding: 0 24px;

            &:hover{
                background-color: #2968c8;
            }
        }

        p{
            color: red ;
            font-size: 0.9rem ;
            span{
                color: #191919;
            }
        }
    }
`;
 
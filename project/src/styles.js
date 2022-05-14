import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;900&family=Roboto:wght@400;700&display=swap');

    body{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        color: #191919 ;
    }
    *{
        box-sizing:border-box ;
    }
`;

export default GlobalStyle
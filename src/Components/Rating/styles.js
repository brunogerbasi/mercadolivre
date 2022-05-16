import styled from 'styled-components'

export const RatingContainer = styled.div`   
    text-align: center;
    ul {
	    color: #a9a9a9;
        margin:0;
        padding: 0;
        margin-bottom: 1rem ;
    }

    ul li {
        list-style-type: none;
        display: inline-block;
        padding: 1px;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        font-size: 30px
    }

    ul li.filled {
        color: #3483fa;
    }

    button{
        border-radius: 6px;
        padding: 7px 15px;
        font-size: 0.9rem;
        font-weight: bold;
        border: 1px solid #191919;
        cursor: pointer;
        -webkit-transition: 0.3s;
        transition: 0.3s;
    }

`;

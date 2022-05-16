import styled from 'styled-components'

export const SliderContainer = styled.div`    
    display: flex ;
    justify-content : space-between;

    @media (max-width: 780px) {
        flex-direction: column-reverse ;
    }
`;


export const SliderThumbs = styled.div`    
    max-width: 70px;
    width: 100% ;    
    padding-right: 15px;

    @media (max-width: 780px) {
        max-width: 100%;
        padding-right: 0px ;
    }

   ul{
        margin: 0 ;
        padding: 0;
        list-style: none;
        @media (max-width: 780px) {
            display: flex ;
            gap: 10px ;
        }

        li{
            margin-bottom: 0.4rem ;
            cursor: pointer; ;
            @media (max-width: 780px) {
                width: calc(100% / 4) ;
                border: solid 1px #c9c9c9 ;
            }
            img{
                max-width: 100% ;
                width: 100% ;
                object-fit: contain;
            }
        }
   }
`;

export const SliderImage = styled.div`    
   width: calc(100% - 15px);
   img{
       max-width:100% ;
       width: 100% ;
       object-fit: contain;
   }

    @media (max-width: 780px) {
        width: 100%;
    }
`;
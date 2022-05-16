
import React, { useEffect, useState } from 'react';
import Footer from 'Components/Footer';
import Header from 'Components/Header';
import MenuCategory from 'Components/MenuCategory';
import Rating from 'Components/Rating';
import SearchBar from 'Components/SearchBar';
import SliderProducts from 'Components/SliderProducts';

import { useSelector } from 'react-redux';


import api from 'services/api';
import Load from 'Components/Load';

import { ContainerProductDetail, NavBar, ProductContainer, ProductMain, ImageProductContainer, InfoProductContainer, OverviewInfo, OverviewInfoBts, DescritionRating, MenuTab } from './styles';
import ScrollButton from 'Components/BtnScrollTop';

function Product() {
  const [btnToggleMenu, setBtnToggleMenu] = useState(true)

  // const dispatch = useDispatch();
  const storeOverview = useSelector(state => state);

  const [respAPI, setRespAPI] = useState();
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    resizeWindow()

    window.onresize = function () {
      resizeWindow()
    };
  }, [])

  function resizeWindow() {
    if (window.matchMedia("(min-width:781px)").matches) {
      setBtnToggleMenu(true)
    } else {
      setBtnToggleMenu(false)
    }
  }

  useEffect(() => {
    setIsLoad(true);

    api
      .get("/items/" + localStorage.getItem("product") || storeOverview.overview.id)      
      .then((response) => {
        setRespAPI(response.data);
        setIsLoad(false);
      })
      .catch((err) => {
        setIsLoad(false);
      });
  }, [storeOverview]);

  return (
    <>
      <Header />

      <ProductMain>
        <ProductContainer>
          <NavBar>
            <SearchBar
              btnToggleMenu={btnToggleMenu}
              setBtnToggleMenu={setBtnToggleMenu}
            />
            {
              btnToggleMenu ?
                <MenuCategory
                  setBtnToggleMenu={setBtnToggleMenu}
                />
                : <></>
            }
          </NavBar>

          <ContainerProductDetail>
            <InfoProductContainer>

              <ImageProductContainer>
                <SliderProducts
                  respAPI={respAPI}
                />
              </ImageProductContainer>

              <OverviewInfo>
                <h1>{respAPI?.title}</h1>
                <p>{respAPI?.descriptions}</p>

                <h3>R$ <span>{respAPI?.price}</span></h3>

                <OverviewInfoBts>
                  <button type="button">Comprar</button>
                  <button type="button">Favoritos</button>
                </OverviewInfoBts>
              </OverviewInfo>
            </InfoProductContainer>

            <DescritionRating>
              <MenuTab>
                <button type='button'>Avaliar Produto</button>
              </MenuTab>
              <Rating />
            </DescritionRating>

          </ContainerProductDetail>

        </ProductContainer>
      </ProductMain>

      <Footer />
      <ScrollButton />
      {
        isLoad &&
        <Load />
      }
    </>
  );
}

export default Product;
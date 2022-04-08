import React from 'react';

import VegetablesImg from '../../../assets/img/01.png';
import {
  BodyContainer,
  BuyButtom,
  CardImage,
  Discount,
  DiscountText,
  ImageContainer,
  Name,
  Price,
  PriceFrom,
  StyledContainer,
} from './styles';

export const ProductCard = () => {
  return (
    <StyledContainer>
      <ImageContainer>
        <CardImage source={VegetablesImg} resizeMode={'contain'} />
        <Discount>
          <DiscountText>Promo</DiscountText>
        </Discount>
      </ImageContainer>
      <BodyContainer>
        <Name numberOfLines={2}>Coca cola lata 350ml teste de nome grande</Name>
        <PriceFrom>R$ 49,90</PriceFrom>
        <Price>R$ 39,90</Price>
        <BuyButtom>
          <Name>Comprar</Name>
        </BuyButtom>
      </BodyContainer>
    </StyledContainer>
  );
};

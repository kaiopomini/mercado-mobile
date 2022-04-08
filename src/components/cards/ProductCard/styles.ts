import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

export const StyledContainer = styled.View`
  background-color: white;
  width: 150px;
  height: 220px;
  border-radius: 16px;
  box-shadow: 4px 4px 4px #0005;
  elevation: 4;
  margin-top: 4px;
  margin-bottom: 4px;
  overflow: hidden;
`;

export const ImageContainer = styled.View`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  align-self: center;
  width: 150px;
  height: 100px;
  overflow: hidden;
  padding: 4px;
`;

export const BodyContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 0px 8px 8px 8px;
  background-color: aliceblue;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Name = styled.Text`
  font-size: 14px;
  margin-bottom: 4px;
  margin-top: 4px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const PriceFrom = styled.Text`
  font-size: 11px;
  text-decoration-line: line-through;
  text-decoration-style: solid;
`;

export const Discount = styled.View`
  position: absolute;
  background-color: red;
  width: 60px;
  height: 20px;
  top: 0;
  left: 0;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const DiscountText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: white;
`;

export const BuyButtom = styled.TouchableOpacity`
  width: 80px;
  height: 28px;
  background-color: ${theme.colors.brand};
  align-self: center;
  margin: 4px;
  justify-content: center;
  align-items: center;
`;

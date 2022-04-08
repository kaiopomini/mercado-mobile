import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const StyledContainer = styled.View`
  background-color: ${theme.colors.secondary};
  padding-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 16px;
`;

export const Separator = styled.View`
  width: 16px;
`;

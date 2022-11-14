import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

export const StyledContainer = styled.View`
  background-color: ${theme.colors.secondary};
`;

export const CardImage = styled.Image`
  width: 100%;
  height: undefined;
  aspect-ratio: ${21 / 9};
  border-radius: 16px;
`;

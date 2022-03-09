import { View, Image, Text } from 'react-native';
import styled from 'styled-components';
import { theme } from '../../../global/styles/theme';

export const StyledContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${theme.colors.secondary};
`;

export const InfoContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const NotificationContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const AvatarContainer = styled(View)`
  padding: 0 8px;
`;

export const Avatar = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
`;

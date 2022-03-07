import styled from 'styled-components';
import { Image, Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${theme.colors.background};
`;

export const InnerContainer = styled(View)`
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled(Image)`
  width: 250px;
  height: 200px;
`;

export const PageTitle = styled(Text)`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${theme.colors.brand};
  padding: 8px;
`;

export const SubTitle = styled(Text)`
  font-size: 18px;
  margin-bottom: 16px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${theme.colors.tertiary};
`;

export const StyledFormArea = styled(View)`
  width: 100%;
`;

export const MsgBox = styled(Text)`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled(View)`
  height: 1px;
  width: 100%;
  background-color: ${theme.colors.darkLight};
  margin: 8px 0 8px 0;
`;

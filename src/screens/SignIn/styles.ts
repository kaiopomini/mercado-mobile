import styled from 'styled-components';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export const StyledContainer = styled(SafeAreaView)`
  background-color: ${theme.colors.background};
  flex: 1;
`;
export const StyledScrollView = styled(ScrollView)`
  background-color: ${theme.colors.background};
  flex: 1;
  padding: 0 24px;
`;

export const TopContainer = styled(View)`
  align-items: center;
`;

export const InnerContainer = styled(View)`
  width: 100%;
  align-items: center;
  flex: 1;
  padding-bottom: 24px;
`;

export const PageLogo = styled(Image)`
  max-width: 100%;
  max-height: 200px;
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

export const SignUpView = styled(View)`
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;

export const SignUpText = styled(Text)`
  justify-content: center;
  align-content: center;
  color: ${theme.colors.tertiary};
  font-size: 15px;
`;

export const TextLink = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled(Text)`
  color: ${theme.colors.brand};
  font-size: 15px;
`;

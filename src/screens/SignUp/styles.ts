import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';

export const StyledContainer = styled(SafeAreaView)`
  background-color: ${theme.colors.background};
  flex: 1;
`;

export const StyledScrollView = styled(ScrollView)`
  flex: 1;
  padding: 0 24px;
  background-color: ${theme.colors.background};
`;

export const InnerContainer = styled(View)`
  width: 100%;
  align-items: center;
  padding-bottom: 24px;
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

export const SignInView = styled(View)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const SignInText = styled(Text)`
  justify-content: center;
  align-content: center;
  color: ${theme.colors.tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled(Text)`
  color: ${theme.colors.brand};
  font-size: 15px;
`;

import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { theme } from '../../global/styles/theme';

export const BaseView = styled(SafeAreaView)`
  flex: 1;
`;

export const StyledScrollView = styled(ScrollView)`
  background-color: ${theme.colors.background};
  flex: 1;
`;

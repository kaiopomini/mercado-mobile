import React from 'react';
import { TouchableOpacity } from 'react-native';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../../global/styles/theme';

import UserImage from '../../../assets/img/user-no-image.png';
import {
  Avatar,
  AvatarContainer,
  InfoContainer,
  NotificationContainer,
  StyledContainer,
  Title,
} from './styles';

export const FullHeader = () => {
  return (
    <StyledContainer>
      <InfoContainer>
        <TouchableOpacity>
          <FAIcons name={'bars'} size={26} color={theme.colors.darkLight} />
        </TouchableOpacity>

        <AvatarContainer>
          <Avatar source={UserImage} resizeMode={'contain'} />
        </AvatarContainer>

        <Title>Olá, {'João'}</Title>
      </InfoContainer>

      <NotificationContainer>
        <TouchableOpacity>
          <FAIcons name={'bell'} size={26} color={theme.colors.darkLight} />
        </TouchableOpacity>
      </NotificationContainer>
    </StyledContainer>
  );
};

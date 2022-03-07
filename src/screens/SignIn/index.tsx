import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  InnerContainer,
  Line,
  MsgBox,
  PageLogo,
  PageTitle,
  StyledContainer,
  StyledFormArea,
  SubTitle,
} from './styles';

import { CustomInputDefault } from '../../components/customInputs/CustomInputDefault';

import Logo from '../../assets/img/logo-blue.png';
import { theme } from '../../global/styles/theme';
import { LoginScrenButton } from '../../components/customButtons/LoginScreenButton';
import { useNavigation } from '@react-navigation/native';

export const SignIn = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Email é obrigatório')
      .email('Informe um email válido'),
    password: Yup.string()
      .required('Senha é obrigatória')
      .matches(/^[^\s]+(\S+[^\s]+)*$/, 'A senha não deve conter espaços')
      .matches(/[A-Z]/, 'A senha deve ter pelomenos 1 letra maiúscula')
      .matches(/[a-z]/, 'A senha deve ter pelomenos 1 letra minúscula')
      .matches(/[0-9]/, 'A senha deve ter pelomenos 1 número')
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~´|']/,
        'A senha deve ter pelomenos 1 caractere especial',
      )
      .min(8, 'A senha deve ter pelomenos 8 caracteres'),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSignInPressed = async (data: any) => {
    if (loading) {
      return;
    }

    // setLoading(true);
    // try {
    //   const response = await Auth.signIn(data.username, data.password);
    //   console.log(response);
    // } catch (e) {
    //   Alert.alert('Oops', e.message);
    // }
    // setLoading(false);
    console.log(data);
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo source={Logo} resizeMode={'contain'} />
        <PageTitle>Mercado Campos</PageTitle>
        <SubTitle>Login</SubTitle>

        <StyledFormArea>
          <CustomInputDefault
            control={control}
            name={'email'}
            placeholder={'exemplo@exemplo.com'}
            placeholderTextColor={theme.colors.darkLight}
            leftIcon={'user'}
            label={'Email *'}
            textContentType={'emailAddress'}
            keyboardType={'email-address'}
          />
          <CustomInputDefault
            control={control}
            name={'password'}
            placeholder={'********'}
            placeholderTextColor={theme.colors.darkLight}
            leftIcon={'lock'}
            label={'Senha *'}
            autoCapitalize={'none'}
            isPassword
          />
          <MsgBox>...</MsgBox>
          <LoginScrenButton onPress={handleSubmit(onSignInPressed)}>
            Entrar
          </LoginScrenButton>
          <Line />
          <LoginScrenButton onPress={onSignUpPress}>
            Criar conta
          </LoginScrenButton>
        </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
  );
};

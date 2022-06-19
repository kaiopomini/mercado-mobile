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
  SignUpText,
  SignUpView,
  StyledContainer,
  StyledFormArea,
  StyledScrollView,
  SubTitle,
  TextLink,
  TextLinkContent,
  TopContainer,
} from './styles';
import { useAuth } from '../../hooks/auth';
import { CustomInputDefault } from '../../components/customInputs/CustomInputDefault';

import Logo from '../../assets/img/logo-blue.png';
import { theme } from '../../global/styles/theme';
import { LoginScrenButton } from '../../components/customButtons/LoginScreenButton';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

type ILoginProps = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);

  // const initialValues: ILoginProps = {
  //   email: 'teste@teste.com',
  //   password: 'Mudar@123',
  // };

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Email é obrigatório')
      .email('Informe um email válido'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    // defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const onSignInPressed = async (data: ILoginProps) => {
    console.log('data', data);
    if (loading) {
      return;
    }
    setLoading(true);

    const response = await signIn(data.email, data.password);
    if (!response.success) {
      Alert.alert(response.message);
    }
    setLoading(false);
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <StyledContainer>
      <StyledScrollView>
        <InnerContainer>
          <TopContainer>
            <PageLogo source={Logo} resizeMode={'contain'} />
            <PageTitle>Mercado Campos</PageTitle>
            <SubTitle>Login</SubTitle>
          </TopContainer>
          <StyledFormArea>
            <CustomInputDefault
              control={control}
              name={'email'}
              placeholder={'exemplo@exemplo.com'}
              placeholderTextColor={theme.colors.darkLight}
              leftIcon={'user'}
              label={'Email'}
              textContentType={'emailAddress'}
              keyboardType={'email-address'}
            />
            <CustomInputDefault
              control={control}
              name={'password'}
              placeholder={'********'}
              placeholderTextColor={theme.colors.darkLight}
              leftIcon={'lock'}
              label={'Senha'}
              autoCapitalize={'none'}
              isPassword
            />
            <MsgBox>...</MsgBox>
            <LoginScrenButton onPress={handleSubmit(() => onSignInPressed)}>
              Entrar
            </LoginScrenButton>
            {/* <View style={{paddingVertical: 8}}/> */}
            <Line />
            <LoginScrenButton onPress={onSignUpPress}>
              Criar conta
            </LoginScrenButton>
            <SignUpView>
              <SignUpText>Não tem conta? </SignUpText>
              <TextLink onPress={onSignUpPress} activeOpacity={0.7}>
                <TextLinkContent>Crie sua conta aqui!</TextLinkContent>
              </TextLink>
            </SignUpView>
          </StyledFormArea>
        </InnerContainer>
      </StyledScrollView>
    </StyledContainer>
  );
};

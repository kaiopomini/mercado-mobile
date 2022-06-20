import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import * as Yup from 'yup';
import Logo from '../../assets/img/logo-blue.png';
import { LoginScrenButton } from '../../components/customButtons/LoginScreenButton';
import { CustomInputDefault } from '../../components/customInputs/CustomInputDefault';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';
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

export type ILoginProps = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const navigation = useNavigation();
  const { signIn, loading } = useAuth();

  const initialValues: ILoginProps = {
    email: 'teste@teste.com',
    password: 'Mudar@123',
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Email é obrigatório')
      .email('Informe um email válido'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const { control, handleSubmit } = useForm<ILoginProps>({
    // mode: 'onSubmit',
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const onSignInPressed = async (data: ILoginProps) => {
    if (loading) {
      return;
    }
    const response = await signIn(data.email, data.password);
    if (!response.success) {
      Alert.alert(response.message);
    }
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
            <LoginScrenButton
              onPress={handleSubmit(onSignInPressed)}
              disabled={loading}>
              Entrar
            </LoginScrenButton>
            {/* <View style={{paddingVertical: 8}}/> */}
            <Line />
            <LoginScrenButton onPress={onSignUpPress} disabled={loading}>
              Criar conta
            </LoginScrenButton>
            <SignUpView>
              <SignUpText>Não tem conta? </SignUpText>
              <TextLink
                onPress={onSignUpPress}
                activeOpacity={0.7}
                disabled={loading}>
                <TextLinkContent>Crie sua conta aqui!</TextLinkContent>
              </TextLink>
            </SignUpView>
          </StyledFormArea>
        </InnerContainer>
      </StyledScrollView>
    </StyledContainer>
  );
};

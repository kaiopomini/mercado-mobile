import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  InnerContainer,
  MsgBox,
  PageTitle,
  StyledFormArea,
  SubTitle,
  StyledContainer,
  StyledScrollView,
  SignInView,
  SignInText,
  TextLink,
  TextLinkContent,
} from './styles';

import { CustomInputDefault } from '../../components/customInputs/CustomInputDefault';

import { theme } from '../../global/styles/theme';
import { LoginScrenButton } from '../../components/customButtons/LoginScreenButton';
import { useNavigation } from '@react-navigation/native';
import { CustomInputMasked } from '../../components/customInputs/CustomInputMasked';

export const SignUp = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    surname: Yup.string()
      .required('Sobrenome é obrigatório')
      .max(100, 'Máximo de 100 caracteres'),
    name: Yup.string()
      .required('Nome é obrigatório')
      .max(100, 'Máximo de 100 caracteres'),
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
      .required('Confirmar senha é obrigatório'),
    phone: Yup.string()
      .required('Telefone/Whatsapp é obrigatório')
      .min(10, 'Telefone inválido')
      .max(11, 'Telefona inválido'),
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

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <StyledContainer>
      <StyledScrollView>
        <InnerContainer>
          <PageTitle>Mercado Campos</PageTitle>
          <SubTitle>Cadastro</SubTitle>

          <StyledFormArea>
            <CustomInputDefault
              control={control}
              name={'name'}
              placeholder={'João'}
              placeholderTextColor={theme.colors.darkLight}
              leftIcon={'user'}
              label={'Nome'}
              textContentType={'name'}
            />
            <CustomInputDefault
              control={control}
              name={'surname'}
              placeholder={'Silva'}
              placeholderTextColor={theme.colors.darkLight}
              leftIcon={'user'}
              label={'Sobrenome'}
              textContentType={'familyName'}
            />
            <CustomInputMasked
              control={control}
              name={'phone'}
              placeholder={'(44) 99999-9999'}
              placeholderTextColor={theme.colors.darkLight}
              leftIcon={'phone'}
              label={'Telefone/Celular'}
              textContentType={'telephoneNumber'}
              keyboardType={'number-pad'}
            />
            <CustomInputDefault
              control={control}
              name={'email'}
              placeholder={'exemplo@exemplo.com'}
              placeholderTextColor={theme.colors.darkLight}
              leftIcon={'at'}
              label={'Email'}
              autoCapitalize={'none'}
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
            <CustomInputDefault
              control={control}
              name={'confirmPassword'}
              placeholder={'********'}
              placeholderTextColor={theme.colors.darkLight}
              leftIcon={'lock'}
              label={'Confimar senha'}
              autoCapitalize={'none'}
              isPassword
            />
            <MsgBox>...</MsgBox>
            <LoginScrenButton onPress={handleSubmit(onSignInPressed)}>
              Cadastrar
            </LoginScrenButton>
            <SignInView>
              <SignInText>Já tem conta? </SignInText>
              <TextLink onPress={handleBack} activeOpacity={0.7}>
                <TextLinkContent>Clique aqui pra entrar!</TextLinkContent>
              </TextLink>
            </SignInView>
          </StyledFormArea>
        </InnerContainer>
      </StyledScrollView>
    </StyledContainer>
  );
};

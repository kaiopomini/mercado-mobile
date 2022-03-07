import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  BaseViewContainer,
  InnerContainer,
  Line,
  MsgBox,
  PageTitle,
  StyledFormArea,
  SubTitle,
} from './styles';

import { CustomInputDefault } from '../../components/customInputs/CustomInputDefault';

import { theme } from '../../global/styles/theme';
import { LoginScrenButton } from '../../components/customButtons/LoginScreenButton';
import { useNavigation } from '@react-navigation/native';

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
    cpf: Yup.string()
      .default(null)
      .notRequired()
      .nullable()
      .test('is-cpf', 'CFP inválido', value => {
        if (value) {
          return validadeCPF(value);
        }
        return true;
      }),
    birthDate: Yup.date()
      .notRequired()
      .nullable()
      .typeError('Data inválida')
      .min(new Date(1900, 0, 1), 'Data inválida')
      .max(new Date(), 'Data inválida'),
    avatar: Yup.string().nullable(),
    phones: Yup.array().of(
      Yup.object().shape({
        phone_number: Yup.string().required('Telefone/Whatsapp é obrigatório'),
      }),
    ),
    address: Yup.object({
      name: Yup.string().required('Endereço é obrigatório'),
      number: Yup.string().notRequired(),
      zip_code: Yup.string().required('CEP é obrigatório'),
      city: Yup.string().required('Cidade é obrigatório'),
      federative_unity: Yup.string().required('Estado é obrigatório'),
    }).required('required'),
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
    <BaseViewContainer>
      <InnerContainer>
        <PageTitle>Mercado Campos</PageTitle>
        <SubTitle>Cadastro</SubTitle>

        <StyledFormArea>
          <CustomInputDefault
            control={control}
            name={'name'}
            placeholder={'exemplo@exemplo.com'}
            placeholderTextColor={theme.colors.darkLight}
            leftIcon={'user'}
            label={'Nome'}
            textContentType={'name'}
          />
          <CustomInputDefault
            control={control}
            name={'surname'}
            placeholder={'exemplo@exemplo.com'}
            placeholderTextColor={theme.colors.darkLight}
            leftIcon={'user'}
            label={'Sobrenome'}
            textContentType={'familyName'}
          />
          <CustomInputDefault
            control={control}
            name={'surname'}
            placeholder={'exemplo@exemplo.com'}
            placeholderTextColor={theme.colors.darkLight}
            leftIcon={'user'}
            label={'Sobrenome'}
            textContentType={'telephoneNumber'}
            keyboardType={'number-pad'}
          />
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
          <LoginScrenButton onPress={() => handleSubmit(onSignInPressed)}>
            Entrar
          </LoginScrenButton>
          <Line />
          <LoginScrenButton onPress={onSignUpPress}>
            Criar conta
          </LoginScrenButton>
        </StyledFormArea>
      </InnerContainer>
    </BaseViewContainer>
  );
};

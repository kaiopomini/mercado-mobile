import { api } from './api';

export type IRegisterProps = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
};

export type IPhone = {
  id: string;
  country_code: string;
  phone_number: string;
  is_primary: Boolean;
  is_whatsapp: Boolean;
  created_at: Date;
  updated_at: Date;
};

export type IAddress = {
  id: string;
  alias: string;
  name: string;
  number: string | null;
  zip_code: string;
  city: string;
  federative_unity: string;
  country: string;
  created_at: Date;
  updated_at: Date;
};

export type IUser = {
  id: string;
  name: string;
  surname: string;
  email: string;
  phones: IPhone[];
  avatar: string | null;
  cpf: string | null;
  birth_date: Date | null;
  addresses: IAddress[];
};

export type IResponse<T> = {
  success: boolean;
  payload: T;
  message: string;
};

export async function registerService(
  userData: IRegisterProps,
): Promise<IResponse<IUser> | null> {
  const { name, surname, email, phone, password, confirmPassword } = userData;
  const postData = {
    name,
    surname,
    email,
    phone,
    password,
    password_confirmation: confirmPassword,
  };
  try {
    const response = await api.post('app/users', postData);
    const data: IResponse<IUser> = response.data;

    const { success } = data;
    if (success) {
      console.log('register service retorna', data.payload);
      return data;
    }
    return null;
  } catch (error) {
    console.log(error.response.data);
    return null;
  }
}

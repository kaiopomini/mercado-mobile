import { api } from './api';

export async function signInService(
  email: string,
  password: string,
): Promise<string | null> {
  try {
    const { data } = await api.post('auth', {
      email: email,
      password: password,
    });
    const { success } = data;
    if (success) {
      console.log('a authservice retorna', data.payload);
      return data.payload;
    }
    return null;
  } catch (error) {
    console.log(error.response.data);
    return null;
  }
}

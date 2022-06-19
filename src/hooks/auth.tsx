import React, { createContext, useContext, useState, ReactNode } from 'react';
import { api } from '../services/api';
import { signInService } from '../services/authService';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
};

export type LoginResponse = {
  message: string;
  success: boolean;
};

type AuthContextData = {
  loading: boolean;
  user: User;
  signIn: (email: string, password: string) => Promise<LoginResponse>;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn(
    email: string,
    password: string,
  ): Promise<LoginResponse> {
    try {
      setLoading(true);

      const token = await signInService(email, password);

      if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const userInfo = await api.get('me');
        setUser({
          ...userInfo.data,
          token,
        });

        return { message: 'Login realizado com sucesso.', success: true };
      } else {
        return {
          message: 'Não foi possível realizar o login.',
          success: false,
        };
      }
    } catch (error: any) {
      return {
        message: 'Não foi possível realizar o login.',
        success: false,
      };
    } finally {
      setLoading(false);
    }
  }

  function signOut() {
    setUser({} as User);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

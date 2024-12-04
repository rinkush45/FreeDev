import { create } from 'zustand';
import axios from 'axios';

interface AuthState {
  user: any;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  login: async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
      });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      set({ token, user });
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  },
  register: async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', data);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      set({ token, user });
    } catch (error) {
      throw new Error('Registration failed');
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  }
}));
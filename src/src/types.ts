export interface User {
  id: string;
  name: string;
  email: string;
  gender: 'Masculino' | 'Feminino' | 'Outro';
  phone: string;
  plan: 'Mensal' | 'Trimestral';
  planExpiryDate: string;
  isAdmin: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export interface Payment {
  id: string;
  date: string;
  amount: number;
  status: 'Pago' | 'Pendente' | 'Atrasado';
}
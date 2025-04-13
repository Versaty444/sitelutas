
import { useNavigate } from 'react-router-dom';
import { Home, CreditCard, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  isAdmin: boolean;
}

export function Sidebar({ isAdmin }: SidebarProps) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="h-screen w-64 bg-[#000000] text-white p-6"> {/* Fundo preto para o menu */}
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-2xl font-bold" style={{ color: '#460804' }}>Dashboard</h1> {/* Cor #460804 para o Dashboard */}
      </div>

      <nav className="space-y-4">
        <button
          onClick={() => navigate(isAdmin ? '/admin' : '/dashboard')}
          className="flex items-center space-x-2 w-full px-4 py-2 rounded-lg bg-[#000000] text-white transition-colors hover:bg-[#000000]"
        >
          <Home className="h-5 w-5" />
          <span>Início</span>
        </button>

        <button
          onClick={() => navigate(isAdmin ? '/pagamentosadmin' : '/historico-pagamentos')}
          className="flex items-center w-full px-4 py-2 rounded-lg bg-[#000000] text-white transition-colors hover:bg-[#000000]"
        >
          <CreditCard className="h-5 w-5 mr-2" />
          <span>Pagamentos</span>
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 w-full px-4 py-2 rounded-lg bg-[#000000] text-white transition-colors hover:bg-[#000000] mt-auto"
        >
          <LogOut className="h-5 w-5" />
          <span>Sair</span>
        </button>
      </nav>
    </div>
  );
}

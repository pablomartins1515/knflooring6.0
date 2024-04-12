// components/LoginForm.tsx
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import AuthorizationToken from '../types/tokenTypes'; // Importa a interface

const LoginForm = () => {
  const [email, setEmail] = useState('pablomartins1515@hotmail.com');
  const [password, setPassword] = useState('919391517h2A');
  const [token, setToken] = useState<AuthorizationToken | null>(null); // Usa a interface para tipar o estado do token
  const router = useRouter(); // Usado para redirecionamento

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cluster.apigratis.com/api/v2/login', {
        email,
        password
      });
      console.log(response.data);
      if (!response.data.error) {
        setToken(response.data.authorization); // Armazena o token no estado
        router.push('/'); // Redireciona para a página de envio de mensagem
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='p-4'>
      <div> Email  </div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className=' w-full' />

      <div> Senha   </div>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <div>
        <button
          type="submit"
          className="mt-4 bg-blue-900 uppercase text-zinc-50  transition-colors"
        >Login</button>
      </div>

    </form>
  );
};

export default LoginForm;

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginMensagem = () => {
  const [email, setEmail] = useState('pablomartins1515@hotmail.com');
  const [password, setPassword] = useState('919391517h2A');
  const [messageNumber, setMessageNumber] = useState('');
  const [messageText, setMessageText] = useState('');
  const [token, setToken] = useState('');
  const router = useRouter(); // Used for redirection

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cluster.apigratis.com/api/v2/login', {
        email,
        password
      });
      console.log(response.data);
      if (!response.data.error) {
        setToken(response.data.authorization.token); // Store the token in state
        router.push('/'); // Redirect to the message sending page
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://cluster.apigratis.com/api/v2/whatsapp/sendText',
        {
          number: messageNumber,
          text: messageText,
          time_typing: 1
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'DeviceToken': '846b38db-43c1-41e1-bbf5-121d91e38fb9', // Replace with your DeviceToken
            'Authorization': `Bearer ${token}` // Use the token stored in state
          }
        }
      );
      console.log('Message sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='p-4'>
        <div>Email</div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full' />

        <div>Password</div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div>
          <button
            type="submit"
            className="mt-4 bg-blue-900 uppercase text-zinc-50 transition-colors"
          >Login</button>
        </div>
      </form>

      <form onSubmit={handleSendMessage}>
        <label>Message Number</label>
        <input type="text" value={messageNumber} onChange={(e) => setMessageNumber(e.target.value)} />

        <label>Message Text</label>
        <input type="text" value={messageText} onChange={(e) => setMessageText(e.target.value)} />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default LoginMensagem;

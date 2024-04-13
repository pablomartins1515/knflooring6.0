import React, { useState, FormEvent } from 'react';
import { useCreateSubscriberMutation, useGetSubscribersQuery } from '../graphql/generated';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

interface Props {
    token: string;
}

const Subscribe: React.FC<Props> = ({ token }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [whatsappAdm, setWhatsappAdm] = useState('');
    const [createSubscriber, { loading }] = useCreateSubscriberMutation();
    const { data: subscribersData } = useGetSubscribersQuery();
    const router = useRouter();

    const handleSubscribe = async (event: FormEvent) => {
        event.preventDefault();

        try {
            await createSubscriber({
                variables: {
                    name,
                    whatsapp,
                    message,
                }
            });
            console.log('Inscrição realizada com sucesso.');
            router.push('/subscriberSucess');
        } catch (error) {
            console.error('Erro ao realizar inscrição:', error);
        }
    };

    const handleSendMessage = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const messageText = `Parabéns!!!!!\nVocê acaba de preencher o cadastro com sucesso!\n\nConfirme seus dados enviados abaixo, e se houver algum erro, confirme com nosso Administrador Aleandro:\n\nDados do Inscrito:\nNome: ${name}\nWhatsApp: ${whatsapp}\nMensagem do Cliente: ${message}`;
            const response = await axios.post('https://cluster.apigratis.com/api/v2/whatsapp/sendText', {
                number: whatsapp,
                text: messageText,
                time_typing: 1
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'DeviceToken': '846b38db-43c1-41e1-bbf5-121d91e38fb9',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Mensagem enviada com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        }

        // Tratamento para enviar mensagem para o ADM
        try {
            const messageText = `Oi Adm!\n${name} acaba de preencher o cadastro com sucesso!\n\nVeja abaixo os Dados do Inscrito:\n\nNome: ${name}\nWhatsApp: ${whatsapp}\nMensagem do Cliente: ${message}`;
            const response = await axios.post('https://cluster.apigratis.com/api/v2/whatsapp/sendText', {
                number: whatsappAdm,
                text: messageText,
                time_typing: 1
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'DeviceToken': '846b38db-43c1-41e1-bbf5-121d91e38fb9',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Mensagem enviada para o ADM com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar mensagem para o ADM:', error);
        }
    };

    const handleSubmitFull = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await handleSubscribe(event);
            await handleSendMessage(event);
        } catch (error) {
            console.error('Erro ao enviar formulário e mensagem:', error);
        }
    };

    const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if (value) {
            value = value.replace(/\D/g, '');
            value = value.replace(/(\d{2})(\d)/, "($1) $2");
            value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        }
        setWhatsapp(value);
    };

    const handlePhone2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if (value) {
            value = value.replace(/\D/g, '');
            value = value.replace(/(\d{2})(\d)/, "($1) $2");
            value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        }
        setWhatsappAdm(value);
    };

    React.useEffect(() => {
        setWhatsappAdm('+5599984574733');
    }, []);

    return (
        <div>
            <section id="idScrollComponentButtonGetAQuote">
                <div className="pt-16 flex justify-center items-center">
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-4 px-4 w-96 justify-center">
                        <input
                            className="bg-zinc-200 text-gray-900 rounded-md px-5 h-14 border border-gray-400"
                            type="text"
                            placeholder="Name"
                            onChange={event => setName(event.target.value)}
                        />

                        <input
                            className="bg-zinc-200 text-gray-900 rounded-md px-5 h-14 border border-gray-400"
                            type="tel"
                            maxLength={15}
                            placeholder="Tel or WhatsApp"
                            value={whatsapp}
                            onChange={event => handlePhone(event)}
                        />

                        <input
                            className="flex bg-zinc-200 text-gray-900 rounded-md px-5 h-28 border border-gray-400"
                            type="text"
                            placeholder="Message"
                            onChange={event => setMessage(event.target.value)}
                        />

                        <input 
                            id="whatsappAdm"
                            className="bg-zinc-200 text-gray-900 rounded px-5  h-0 "
                            type="tel"
                            maxLength={15}
                            placeholder="WhatsApp do ADM"
                            value={whatsappAdm}
                            onChange={event => handlePhone2(event)}
                        />
                    </form>
                </div>

                <div className="justify-center flex items-center m-1">
                    <button
                        className="w-[22rem] bg-orange-500 text-gray-50 py-3 rounded-lg font-medium text-xl hover:bg-opacity-60 transition-colors duration-200 disabled:opacity-50"
                        onClick={handleSubmitFull}
                    >
                        Get A Quote
                    </button>
                </div>

                <h1 className="mb-12 mt-12 text-2xl text-gray-500 font-semibold text-center">
                    More Contacts
                </h1>

                <Link href="tel:+17325208743">
                    <p className="mb-12 text-2xl text-gray-500 font-normal text-center hover:font-extrabold hover:text-orange-500">
                        +1 732 520 8743
                    </p>
                </Link>
                <p className="mb-12 text-base text-gray-500 font-normal text-center">
                    info@malvesflooringsolutions.com
                </p>
            </section>
        </div>
    );
};

export default Subscribe;

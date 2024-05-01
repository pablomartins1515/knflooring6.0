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
            value = value.replace(/(\d{3})(\d{3})(\d{0,4})/, "($1) $2-$3");
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
                            className="bg-white text-gray-900 rounded-md px-5 h-14 border border-gray-400"
                            type="text"
                            placeholder="Name"
                            onChange={event => setName(event.target.value)}
                        />

                        <div className=' flex'>
                            <div className=" rounded-s-lg gap-1 h-14 p-4 flex-shrink-0  inline-flex items-center py-2.5   text-center text-gray-900 bg-white border-s border-t border-b border-gray-400  hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                                <svg fill="none" aria-hidden="true" className="h-4 w-5 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2" /><mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2" /></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" /><path fill="#46467F" d="M0 .5h8.4v6.533H0z" /><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd" /></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" /><stop offset="1" stop-color="#F0F0F0" /></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="1" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" /></filter></defs></svg>
                                <p className=''>+ 1 </p>
                            </div>

                            <input
                                className="bg-zinc-200 text-gray-900 px-5 h-14 border border-gray-400 rounded-e-md w-96"
                                type="tel"
                                maxLength={14}
                                placeholder="Tel or WhatsApp"
                                value={whatsapp}
                                onChange={event => handlePhone(event)}
                            />
                        </div>
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

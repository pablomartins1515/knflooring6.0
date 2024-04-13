import React from 'react';
import Header from "../components/Header";
import { Rodape } from "../components/Rodape";
import Head from 'next/head';
import Intro from '../components/Intro'; // Corrigido o caminho do componente
import OurServices from '../components/OurServices'; // Corrigido o caminho do componente
import AboutUs from '../components/AboutUs'; // Corrigido o caminho do componente
import Subscribe from '../components/Subscribe'; // Corrigido o caminho do componente
import BottomWhatsApp from '../components/BottomWhatsApp'; // Corrigido o caminho do componente
import OurProjects from '@/components/OurProjects';

const HomePage = () => {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    return (

        <div className='m-0 p-0 justify-center content-center items-center'>
            <Head>
                <title>Página Inicial</title>
                <meta name="description" content="Descrição da página inicial..." />
            </Head>
            <Header />
            <main>
                <span>
                    <Intro />
                </span>
            </main>


            <OurProjects />

            <AboutUs />

            {token && <Subscribe token={token} />}

            <Rodape />

            <div className='flex-auto BottomStyle fixed bottom-3 right-1  h-15 w-16 cursor-pointer'>
                <BottomWhatsApp />
            </div>
        <div/>
    </div>
    );
}

export default HomePage;

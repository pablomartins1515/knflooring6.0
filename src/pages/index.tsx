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
      
        <>
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
    
            <OurServices />

            <OurProjects />

            <AboutUs />
            
            <section id="idScrollComponentButtonGetAQuote"> {/*ID de scroll criado para ser utilizado nos componentes onde houver o botão Get A Quote, ex: Header */}
                {token && <Subscribe token={token} />}
            </section>
            
            <Subscribe token={token} />
            
            <Rodape />

            <div className='flex-auto BottomStyle fixed bottom-3 right-1  h-15 w-16 cursor-pointer'>
                <BottomWhatsApp />
            </div>
        </>
    );
}

export default HomePage;

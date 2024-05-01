// BlogPage.tsx
import Head from "next/head";
import Header from "../../components/Header";
import React from "react";
import { Rodape } from "@/components/Rodape";
import { useGetSubscribersQuery } from "@/graphql/generated";


export default function Subscribers() {
    const { data, loading, error } = useGetSubscribersQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error occurred: {error.message}</div>;
    }

    if (!data || !data.subscribers) {
        return <div>No subscribers data available.</div>;
    }


    return (
        <>
            <Head>
                <title>Página dos inscritos</title>
                <meta name="description" content=" "
                />
            </Head>


            <Header />

            <main className="justify-center items-center">
                <aside className="bg-gray-50 p-6 border-gray-100 flex flex-col w-[400px] ">

                    <span className="font-bold text-2xl pb-6 mb-6 mt-2 border-b border-gray-100 block text-blue-900 text-center">
                        LISTA DOS INSCRITOS
                    </span>


                    <div className="flex flex-col gap-8">
                        {data.subscribers.map(subscriber => (
                            <div key={subscriber.name}>
                                <p>Nome: {subscriber.name}</p>
                                <p>Tel ou WhatsApp: {subscriber.whatsapp}</p> 
                                <p>Endereço: {subscriber.address}</p>   
                                <p>Mensagem do Cliente: {subscriber.message}</p>                            
                            </div>
                        ))}
                    </div>
                </aside>
            </main>

            <div >
                <Rodape />
            </div>
        </>
    );
}

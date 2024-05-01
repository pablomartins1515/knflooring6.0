// BlogPage.tsx
import Head from "next/head";
import Header from "../../components/Header";
import React from "react";
import { Rodape } from "@/components/Rodape";
import { useGetSubscribersQuery } from "@/graphql/generated";


export default function subscriberSucess() {
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
                <title>Sucess</title>
                <meta name="description" content=" "
                />
            </Head>


            <Header />
                <h1 className="justify-center itens-center flex m-4 text-3xl ">
                    Congratulations!!!
                </h1>

                <p className="justify-center itens-center text-center flex flex-1 m-4 font-extrabold text-3xl">
                Your registration was
 
                </p>

                <p className="justify-center itens-center text-center flex flex-1 m-2 font-extrabold text-3xl text-green-500">
                done successfully!
                </p>


                <p className=" mt-4 justify-center itens-center text-center flex flex-1 m-2 font-extralight text-3xl mx-4">
                Our team will contact you shortly and continue with the service!
                </p>


            <div >
                <Rodape />
            </div>
        </>
    );
}

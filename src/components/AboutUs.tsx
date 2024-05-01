import React from 'react';
import Maps from './Maps';

const AboutUs = () => {
    return (
        <div className=" items-center justify-center mt-3">
            <section id="idScrollComponentAboutUs"> {/*ID de scroll criado para ser utilizado nos componentes*/}
                <h1 className='text-4xl font-black pt-16 justify-center text-center text-orange-500 pb-6 '>
                    <strong className='text-gray-500'>About </strong>Us
                </h1>
            </section>

            <main className=' flex items-center justify-center mt-3'>
                <span className=" m-0 px-0 md:m-4 md:px-8">
                    <Maps />
                </span>

                <span className="m-4 px-8 pt-4 ">
                    <div className='mt-2 md:text-base text-sm font-extralight max-w-[600px]'>
                        <p className=' my-3 '>
                            With years of experience and a commitment to providing <br />
                            <strong>quality services and products.</strong> <br />
                        </p>
                        <p>We serve all of <strong>Monmouth Country, NJ</strong> and the surrounding region.</p>
                        <p className=' my-3 '>
                            We offer a <strong>wide variety of flooring options to suit any style and <br />
                                budget.</strong> From hardwood and laminate to carpet and tile and refinishing. <br />
                        </p>
                        <p className=' my-3 '>
                            <strong>Our knowledgeable team of experts can guide you through the <br />
                                selection process,</strong> ensuring that you find the perfect flooring solution for <br /> your space.
                        </p>
                        <p className=' my-3 '>
                            We pride ourselves on our exceptional customer service. <strong>Our team is <br />
                                dedicated to making sure that every client is satisfied with their <br />
                                purchase and installation experience.</strong> We work closely with each <br />
                            customer to understand their unique needs and preferences, and we go <br />
                            the extra mile to ensure that they are completely happy with their new <br />
                            floors.
                        </p>
                        <p className=' my-3 '>
                            <strong> We believe that quality flooring is an investment in your home or <br />
                                business.</strong> That’s why we only work with the best brands in the industry,<br />
                            ensuring that our customers receive durable, long-lasting products that<br />
                            they can enjoy for years to come.
                        </p>
                    </div >
                </span>

                <style jsx>{`
                @media (max-width: 767px) {
                    .flex {
                        flex-direction: column; /* Inverte a ordem dos elementos em dispositivos móveis */
                    }

                    .m-4 {
                        margin: 0; /* Remove a margem dos elementos em dispositivos móveis */
                    }

                    .m-4:first-child {
                        margin-bottom: 1rem; /* Adiciona uma margem inferior apenas ao primeiro elemento em dispositivos móveis */
                    }

                }
            `}</style>

            </main>

        </div>
    );
}

export default AboutUs;

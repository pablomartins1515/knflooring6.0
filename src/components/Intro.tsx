import React from 'react';
import { Imagem } from './Imagem';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import CountUp from 'react-countup';


const Intro = () => {
    const scrollToComponent = () => {
        scroll.scrollToBottom();
    };
    
    return (
        <div className="items-center justify-center mt-3">
            <main className='flex-col items-center justify-center mt-3 md:flex md:flex-row'>
                <span className="m-4 pt-4">
                    <div className='pb-8 text-gray-500 justify-center items-center content-center md:pl-28'>
                        <div className="px-8 center justify-center flex flex-col col-span-1 max-w-[550px]">
                            <p className="my-2 text-base italic">
                                Elevate your home or business to new levels of elegance and practicality.
                            </p>
                            <h1 className='my-2 text-5xl md:text-6xl font-black'>
                                <strong className='text-orange-500'>Flooring </strong> for your home or business
                            </h1>
                            <p className='py-2 mt-2 text-md'>
                                Tile and Ceramic Solutions for Your Home or Business
                                Since 2011, we have been providing high-quality tiling
                                solutions. Our team of experts has a deep understanding
                                of tile and ceramic materials and their application.
                                We take pride in offering a wide variety of tiling options,
                                from classic tiles to modern and contemporary designs,
                                covering the full spectrum of your aesthetic and functional needs.
                            </p>
                        </div>

                        <div>
                            <div className='pt-6 flex flex-1 md:gap-12 gap-5 justify-center'>
                                <div className='justify-center items-center flex flex-col col-1'>
                                    <h1 className='text-3xl md:text-4xl font-black'>
                                        12
                                    </h1>
                                    <h2 className='pt-3 text-xl'>
                                        Years Experience
                                    </h2>
                                </div>
                                <div className='justify-center items-center flex flex-col col-1'>
                                    <h1 className='text-3xl md:text-4xl font-black'>
                                        <CountUp start={0} end={1800} duration={6} separator="," />+
                                    </h1>
                                    <h2 className='pt-3 text-xl'>
                                        Completed Projects
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="px-5 py-10 flex justify-center items-center row-end-4 row-span-4 flex-row-reverse cursor-pointer">
                            <ScrollLink to="idScrollComponentButtonGetAQuote" smooth={true} duration={500} offset={-100}>
                                <button
                                    className="bg-orange-500 text-gray-50 py-3 px-16 rounded-lg font-medium text-base hover:bg-opacity-60 transition-colors duration-200 disabled:opacity-50"
                                >
                                    Get A Quote
                                </button>
                            </ScrollLink>
                        </div>
                    </div>
                </span>

                <span className='md:justify-center md:content-center md:items-center'>
                    <Imagem />
                </span>

                <style jsx>{`
                    @media (max-width: 767px) {
                        .m-4 {
                            margin: 0; /* Remove a margem dos elementos em dispositivos móveis */
                        }

                        .m-4:first-child {
                            margin-bottom: 1rem; /* Adiciona uma margem inferior apenas ao primeiro elemento em dispositivos móveis */
                        }

                        h2 {
                            font-size: 0.875rem; /* 14px */
                            line-height: 1.25rem; /* 20px */
                        }

                        p {
                            font-size: 0.875rem; /* 14px */
                            line-height: 1.25rem; /* 20px */
                        }
                    }
                `}</style>
            </main>
        </div>
    );
}

export default Intro;

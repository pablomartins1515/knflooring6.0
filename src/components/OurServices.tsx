import React from 'react';
import { Carousel } from "@material-tailwind/react";


const OurServices = () => {
    return (

        <div className=" items-center justify-center mt-3">
            
            <section id="idScrollComponentOutServices"> {/*ID de scroll criado para ser utilizado nos componentes*/}
                <h1 className='text-4xl font-black pt-16 justify-center text-center text-orange-500 bg-gray-100 bg-opacity-50  py-2 '>
                    <strong className='text-gray-500'>Our </strong>Services
                </h1>
            </section>

            <div className=' bg-gray-100 bg-opacity-50  text-gray-500 pb-2'>
                <Carousel
                    transition={{ duration: 1 }}
                    className="rounded-xl pb-8"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className={"absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 "}>
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-3 w-3 cursor-pointer rounded-full transition-all content-[''] ${activeIndex === i ? " bg-orange-500" : " bg-orange-500 opacity-20"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}>


                    < div className='' >
                        <main className='flex flex-1 gap-8 md:gap-28 items-center justify-center pb-6'>
                            <span className='mt-2 md:text-base text-sm font-extralight max-w-[700px]'>
                                <p className=' my-3 px-8 md:px-2'>
                                    Common ceramic tiles are known for their durability and versatility. They can add a touch of elegance and practicality to any space, and are available in a variety of colors, patterns, and textures.  <br />
                                </p>
                                <p className=' my-3 px-8 md:px-2 '>
                                    Common ceramic tiles are a popular choice among homeowners and builders due to their strength and ease of maintenance. Their clean and classic look can complement a variety of decorating styles, from modern to traditional.
                                </p>
                                <p className=' my-3 px-8  md:px-2'>
                                    One of the advantages of common ceramic tiles is their resilience. They are designed to withstand heavy traffic and resist daily wear and tear, making them an ideal choice for high-traffic areas such as kitchens and bathrooms.<br />
                                </p>
                                <p className=' px-8  md:px-2'>
                                    Additionally, common ceramic tiles are easy to clean and require little maintenance to keep them looking pristine over time. Their durability and practicality make them a cost-effective and long-lasting option for flooring in any residential or commercial setting.
                                </p>
                            </span>

                            <span className=' justify-center items-center flex flex-col col-1'>
                                <h1 className='text-3xl font-black'>
                                    <img
                                        src="https://lh3.googleusercontent.com/pw/AP1GczMis4-gehtMDCkE8Ur7e2QmH5sbegsGi4FHjnjmBcdZlGW32oLf-rOhaMkDiJ2gV_QuXiye59cojehgkLqDDXB6bIswvof16QTL2dWj7_tN-ZEcfTNHwdkJVAp4DuKH0axdylfiH9lXwV_8wAbuj1X8eQ=w1298-h1730-s-no"
                                        alt="image 1"
                                        className="h-64  w-80 rounded-md object-cover"
                                    />
                                </h1>
                                <h2 className='pt-3 font-bold text-2xl'>
                                    Ceramic
                                </h2>
                            </span>

                            <style jsx>{`
                                @media (max-width: 767px) {
                                .span {
                                margin-left: 4px;
                                    }
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
                    </div >

                    < div className='' >
                        <main className='flex flex-1 gap-8 md:gap-28 items-center justify-center pb-6'>
                            <span className='mt-2 md:text-base text-sm font-extralight max-w-[700px]'>
                                <p className=' my-3 px-8 md:px-2'>
                                    Porcelain tiles are renowned for their durability and versatility. They can bring a touch of elegance and functionality to any space, available in a wide array of colors, patterns, and textures.<br />
                                </p>
                                <p className=' my-3 px-8 md:px-2 '>
                                    Porcelain tiles are a favored option among homeowners and builders alike, prized for their strength and low maintenance. Their sleek and timeless appearance can complement a variety of interior design styles, from contemporary to traditional.
                                    <br />
                                </p>
                                <p className=' my-3 px-8  md:px-2'>
                                    One of the key benefits of porcelain tiles is their durability. Engineered to endure heavy foot traffic and resist daily wear and tear, they excel in high-traffic areas such as kitchens, bathrooms, and living rooms.<br />
                                </p>
                                <p className=' px-8  md:px-2'>
                                    TMoreover, porcelain tiles are easy to clean and require minimal upkeep to preserve their pristine look over time. Their enduring quality and practicality make them a cost-effective and enduring choice for flooring in both residential and commercial settings.<br />
                                </p>
                            </span>

                            <span className=' justify-center items-center flex flex-col col-1'>
                                <h1 className='text-3xl font-black'>
                                    <img
                                        src="https://lh3.googleusercontent.com/pw/AP1GczNmPaCiSnMbArkvqWWb2X3-bC0j0RBej5NE4sNFFAVEi44abCFMNVBXLL6p9NoMIzW0kFVJHSEWmy1ph_kUmNoTTIyy-npeCkQzJtC16Y_J4gtLJx-NYDYWW9H5_IfSdwGyTLd60TRWPj6x__FFaBiFXA=w1242-h1531-s-no"
                                        alt="image 1"
                                        className="h-64  w-80 rounded-md object-cover"
                                    />
                                </h1>
                                <h2 className='pt-3 font-bold text-2xl'>
                                    Porcelain
                                </h2>
                            </span>

                            <style jsx>{`
                                @media (max-width: 767px) {
                                .span {
                                margin-left: 4px;
                                    }
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
                    </div >

                    < div className='' >
                        <main className='flex flex-1 gap-8 md:gap-28 items-center justify-center pb-6'>
                            <span className='mt-2 md:text-base text-sm font-extralight max-w-[700px]'>
                                <p className=' my-3 px-8 md:px-2'>
                                    Ceramic and porcelain tile coverings for kitchens and bathrooms are known for their durability and versatility. They can add a touch of elegance and functionality to these essential spaces, available in a wide variety of colors, patterns, and textures.
                                </p>
                                <p className=' my-3 px-8 md:px-2 '>
                                    Both ceramic and porcelain are preferred options among homeowners and builders, valued for their strength and ease of maintenance. Their clean and classic appearances can complement a variety of interior design styles, from modern to traditional. <br />
                                </p>
                                <p className=' my-3 px-8  md:px-2'>
                                    One of the main advantages of these coverings is their durability. Designed to withstand heavy traffic and the typical moisture of kitchens and bathrooms.
                                </p>
                                <p className=' px-8  md:px-2'>
                                    Additionally, ceramic and porcelain tile coverings are easy to clean and require minimal maintenance to keep their impeccable appearance over time. Their enduring quality and practicality make them economical and long-lasting choices for covering surfaces in both residential and commercial settings. <br />
                                </p>
                            </span>

                            <span className=' justify-center items-center flex flex-col col-1'>
                                <h1 className='text-3xl font-black'>
                                    <img
                                        src="https://lh3.googleusercontent.com/pw/AP1GczOrwzZMYr_RqnW6xJU4uG0710dcu2lsRcJsqUanfbNeN7kTNwbftYo97g8oPis6WYgjmCoHIQ000AtF6alXBs8gg_LHqqxQd0CRLwHny30HaW264xUbra4V1Y15TLNrHUH58MiF2Gyg3uTBgakVSRTQdw=w2306-h1730-s-no"
                                        alt="image 1"
                                        className="h-64  w-80 rounded-md object-cover"
                                    />
                                </h1>
                                <h2 className='pt-3 font-bold text-2xl'>
                                    Kitchens and Bathrooms
                                </h2>
                            </span>

                            <style jsx>{`
                                @media (max-width: 767px) {
                                .span {
                                margin-left: 4px;
                                    }
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
                    </div >

                    < div className='' >
                        <main className='flex flex-1 gap-8 md:gap-28 items-center justify-center pb-6'>
                            <span className='mt-2 md:text-base text-sm font-extralight max-w-[700px]'>
                                <p className=' my-3 px-8 md:px-2'>
                                    Hardwood floors are known for their durability and timeless beauty. They <br />
                                    can add warmth and character to a home, and they are available in a <br />
                                    variety of finishes and stains.  <br />
                                </p>
                                <p className=' my-3 px-8 md:px-2 '>
                                    Hardwood flooring is a popular choice for homeowners and builders alike.  <br />
                                    It offers a timeless, natural look that can enhance the aesthetic appeal of  <br />
                                    any room. Hardwood floors are also known for their durability and  <br />
                                    longevity.<br />
                                </p>
                                <p className=' my-3 px-8  md:px-2'>
                                    One of the benefits of hardwood flooring is its durability. Hardwood floors <br />
                                    are designed to withstand heavy foot traffic and everyday wear and tear. <br />
                                </p>
                                <p className=' px-8  md:px-2'>
                                    They can last for decades with proper care and maintenance, making them a <br />
                                    cost-effective flooring option over the long term.
                                </p>
                            </span>

                            <span className=' justify-center items-center flex flex-col col-1'>
                                <h1 className='text-3xl font-black'>
                                    <img
                                        src="https://lh3.googleusercontent.com/pw/AP1GczO19TUBqMLjrMnzTFVQumUk-EH4qEig38Iy3a7KDvxJaEJr7rn_uKpHpy8gQGx21zO_FvOa3Yrq1BH1sr2lOMi43KmLvNzUuAVlNHvDx-672HwqPBromIJWkwPHQR3K11VpW1EGHwGRsNGr7zu-XeZpSw=w828-h1472-s-no"
                                        alt="image 1"
                                        className="h-64  w-80 rounded-md object-cover"
                                    />
                                </h1>
                                <h2 className='pt-3 font-bold text-2xl'>
                                    Hardwood
                                </h2>
                            </span>

                            <style jsx>{`
                                @media (max-width: 767px) {
                                .span {
                                margin-left: 4px;
                                    }
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
                    </div >
                </Carousel>
            </div>
        </div>
    );
}

export default OurServices;







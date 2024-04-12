import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "../Logo";

const Header = () => {
    const scrollToComponent = () => {
        scroll.scrollToBottom();
    };

    return (
        <main className="flex flex-1 items-center content-center justify-center mt-3">
            <span className="m-4">
                <Logo />
            </span>

            <div className="desktop-only flex justify-center text-2xl">
                <div className='border-b-4 border-transparent hover:border-b-orange-500 transition-all duration-200'>
                    <div className='mx-4 hover:cursor-pointer'>
                        <ScrollLink to="idScrollComponentOutServices" smooth={true} duration={500} offset={-100}>
                            Services
                        </ScrollLink>
                    </div>
                </div>

                <div>
                    |
                </div>
                <ScrollLink to="idScrollComponentOutProjects" smooth={true} duration={500} offset={-100}>
                    <div className='border-b-4 border-transparent hover:border-b-orange-500 transition-all duration-500'>
                        <div className='mx-4 hover:cursor-pointer'>
                            Out Projects
                        </div>
                    </div>
                </ScrollLink>

                <div>
                    |
                </div>

                <div className='border-b-4 border-transparent hover:border-b-orange-500 transition-all duration-200'>
                    <ScrollLink to="idScrollComponentAboutUs" smooth={true} duration={500} offset={-100}>
                        <div className='mx-4 hover:cursor-pointer'>
                            About US
                        </div>
                    </ScrollLink>
                </div>

                <div>
                    |
                </div>

                <ScrollLink to="idScrollComponentButtonGetAQuote" smooth={true} duration={500} offset={-100}>
                    <div className='border-b-4 border-transparent hover:border-b-orange-500 transition-all duration-200'>
                        <div className='mx-4 hover:cursor-pointer'>
                            Contact
                        </div>
                    </div>
                </ScrollLink>

            </div>

            <span className="m-4">
                <ScrollLink to="idScrollComponentButtonGetAQuote" smooth={true} duration={500} offset={-100}>
                    <button
                        className="bg-orange-500 text-gray-50 py-3 px-6 rounded-lg font-medium text-lg hover:bg-orange-500 hover:opacity-50 transition-colors duration-200 disabled:opacity-50"
                    >
                        Get A Quote
                    </button>
                </ScrollLink>
            </span>

            <style jsx>{`
                @media (max-width: 767px) {
                    .desktop-only {
                        display: none;
                    }
                }
            `}</style>
        </main>
    );
}

export default Header;

import React from 'react';
import Subscribe from './Subscribe';

export function Contact() {
    return (
        <main className="flex flex-1 items-center content-center justify-center mt-3 bg-gray-75">
            <span className="m-4">
                <div className='bg-gray-75 bg-opacity-50 text-gray-500 py-2'>
                    <div className='flex content-center justify-center gap-8 pt-12'>
                        <h1 className='pl-6 text-4xl font-black justify-center text-center content-center text-orange-500'>
                            <strong className='text-gray-500'>We Love to hear </strong><br />
                            From You
                        </h1>
                        <p className='pr-8 justify-center content-center '>
                            <strong className='text-gray-500'>Get in touch </strong>and we’ll get back to <br />
                            you as soon as we can.
                        </p>
                    </div>
                    <Subscribe token='' /> {/* Pass the token as a prop */}
                </div>
            </span>
        </main>
    );
}

export default Contact;

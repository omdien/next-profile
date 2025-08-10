import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='relative w-full h-screen flex justify-center flex-col bg-slate-100'>
            <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-6'>

                {/* image content for mobile */}
                <div className='xl:hidden w-full flex justify-center mt-30 mb-2'>
                    <div className='bg-white rounded-3xl shadow-lg py-4 px-10 w-6/8 max-w-xs'>
                        <Image src='/images/bppmhkp-logo.png' alt='image' width={300} height={300} className='mx-auto' />
                    </div>
                </div>

                {/* text content */}
                <div>
                    {/* heading */}
                    <h1 className='text-3xl md:text-4xl text-blue-600 lg:text-5xl mt-6 mb-6 font-bold leading-[2.5rem] md:leading-[3.5rem]'>
                        bring safety through quality
                    </h1>

                    {/* description */}
                    <p className='text-xs sm:text-sm md:text-base font-medium text-gray-700'>
                        BPPMHKP merupakan otoritas kompeten di bawah Kementerian Kelautan dan Perikanan (KKP) yang bertugas untuk menjamin mutu hasil kelautan dan perikanan melalui pengendalian dan pengawasan yang ketat, mulai dari hulu hingga hilir. BPPMHKP berperan penting dalam memastikan keamanan, kualitas, dan keberlanjutan produk kelautan dan perikanan yang beredar di pasar, serta mendukung pengembangan industri perikanan yang berkelanjutan.
                    </p>

                    {/* button group */}
                    <div className='mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                        {/* first button */}
                        <a href="#_" className="relative overflow-hidden px-10 py-3 font-medium text-white transition duration-300 bg-blue-400 rounded-md hover:bg-blue-600 ease">
                            <span className="absolute bottom-0 left-0 h-full -ml-2">
                                <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path>
                                </svg>
                            </span>
                            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                                <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path>
                                </svg>
                            </span>
                            <span className="relative">Siapmutu</span>
                        </a>

                        {/* second button */}
                        <a href="#_" className="relative overflow-hidden px-10 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
                            <span className="absolute bottom-0 left-0 h-full -ml-2">
                                <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path>
                                </svg>
                            </span>
                            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                                <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path>
                                </svg>
                            </span>
                            <span className="relative">Info Selanjutnya</span>
                        </a>
                    </div>
                </div>

                {/* image content for desktop */}
                <div className='mx-auto hidden xl:block rounded-3xl shadow-lg p-6'>
                    <Image src='/images/bppmhkp-logo.png' alt='image' width={380} height={380} />
                </div>
            </div>
        </div>
    );
}

export default Hero;

import React from 'react';
import { Link } from 'react-router-dom';
import old from '../../../images/old.jpg'

const Home = () => {
    return (
        <div >
            <section className=" dark:text-gray-900">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Used Iteam
                            <span className="text-secondary"> For Buy</span>  and Sale
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Sale your old produt and buy new product

                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Add Product</Link>
                            <Link rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 dark:bg-amber-500">Buy Product</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={old} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
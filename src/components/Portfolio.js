import React from 'react';
import food from '../assert/portfolio1.jpg'
import bike from '../assert/bike.jpg'
import course from '../assert/coursera.png'

const Portfolio = () => {

    const portfolios= [
        {
            id:1,
            src:food,
            live:'https://food-service-169ea.web.app/',
            code:'https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-Rukunuljoy'
        },
        {
            id:2,
            src:bike,
            live:'https://reseller-bike.web.app/',
            code: 'https://github.com/programming-hero-web-course-4/b612-used-products-resale-clients-side-Rukunuljoy'
        },
        {
            id:3,
            src:course,
            live:''
        },
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline  border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>check out some of my project here</p>
                </div>
                
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 py-10 sm:px-0 '>
                {
                    portfolios.map(({id,src,live,code})=>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt=''className='rounded-md w-96 h-56 duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                           <a href={live}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live Site</button></a>
                            <a href={code}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                        </div>
                    </div>
                
                
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
import React from 'react';
import html from '../assert/html.png'
import css from '../assert/css.png'
import tailwind from '../assert/tailwind.jpg'
import bootstrap from '../assert/bootstrap.jpg'
import JavaScript from '../assert/javascript.jpg'
import react from '../assert/react.jpg'
import next from '../assert/next.jpeg'
import node from '../assert/node.png' 
import express from '../assert/express.png' 
import mongoDB from '../assert/images.png' 

const Skill = () => {

    const Skills = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:bootstrap,
            title:'BOOTSTRAP',
            style:'shadow-sky-500'
        },
        {
            id:5,
            src:JavaScript,
            title:'JAVASCRIPT',
            style:'shadow-indigo-500'
        },
        {
            id:6,
            src:react,
            title:'REACT JS',
            style:'shadow-lime-500'
        },
        {
            id:7,
            src:next,
            title:'NEXT JS',
            style:'shadow-emerald-500'
        },
        {
            id:8,
            src:node,
            title:'NODE JS',
            style:'shadow-teal-500'
        },
        {
            id:9,
            src:express,
            title:'EXPRESS JS',
            style:'shadow-white'
        },
        {
            id:10,
            src:mongoDB,
            title:'MONGODB',
            style:'shadow-cyan-500'
        },
        {
            id:11,
            src:mongoDB,
            title:'GITHUB',
            style:'shadow-cyan-500'
        },
        {
            id:12,
            src:mongoDB,
            title:'FIREBASE',
            style:'shadow-cyan-500'
        },
    ]
    return (
        <div name="experience" className='w-full h-screen p-4 bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Experience
                    </p >
                    <p className='py-6'>These are the technologies i've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8'>
                    {
                        Skills.map(({id,src,title,style})=> (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                        ))
                    }
                   
                </div>
            </div>

        </div>
    );
};

export default Skill;
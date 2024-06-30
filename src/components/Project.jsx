import React from 'react'
import todo from '../assets/todo.png'
import passwordGenerator from '../assets/passwordgenerator.png'
import rashiRatan from '../assets/rashiratan.png'
import algovisualiser from '../assets/algovisualiser.png'

const Project = () => {
    const links = [
        {
            id: 1,
            imagelink: algovisualiser,
            link : 'https://algovisualiserr.netlify.app/',
            code: 'https://github.com/snehamalik09/algo-visualizer',
            heading: "Algorithm Visualiser",
        },
        {
            id: 2,
            imagelink: todo,
            link : 'https://snehamalik09.github.io/ToDo-App-React.js/',
            code: 'https://github.com/snehamalik09/ToDo-App-React.js',
            heading: "To-Do Website",
        },
        {
            id: 3,
            imagelink: passwordGenerator,
            link : 'https://snehamalik09.github.io/Password-Generator---React/',
            code : 'https://github.com/snehamalik09/Password-Generator---React',
            heading: "Password Generator Website",
        },
        {
            id: 4,
            imagelink: rashiRatan,
            link : 'https://rashiratan.netlify.app/',
            code: 'https://github.com/snehamalik09/Rashi-Ratan',
            heading: "Rashi Ratan",
        },

    ]
    return (

    <>
            <div name="Project" className='hidden md:flex md:flex-col md:w-full w-[90%] justify-center mx-auto md:mt-48 lg:gap-36 '>
                <h1 className='text-center text-3xl sm:text-4xl font-bold text-black my-16 lg:m-0'>PROJECTS</h1>
                <div className=' flex flex-col md:max-w-screen-lg w-full justify-center mx-auto   '>
                    <div className='grid gap-8 grid-cols-2 md:grid-cols-3 md:px-0 px-10 cursor-pointer  '>
                        {links.map((item) => (
                            <div key={item.id} className='shadow-md shadow-gray-700 rounded-lg bg-white'>
                            <h2 className='text-center p-2 text-xs md:p-4 md:text-lg font-semibold'>{item.heading}</h2>
                                <img src={item.imagelink} alt="" className='border-2 border-gray-500' />
                                <div className='flex justify-between items-center p-2 md:p-4 text-xs md:text-lg font-semibold '>
                                    <a target="_blank" className='active:text-xl hover:font-bold' href={item.link} > Demo </a>
                                    <a target="_blank" className='active:text-xl hover:font-bold' href={item.code} > Code </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div name="Project" className='flex flex-col  md:hidden w-full justify-center mx-auto mt-10'>
                <h1 className='text-center text-3xl font-bold text-black'>PROJECTS</h1> <br />
                <div className=' flex flex-col w-full justify-center items-center mx-auto   '>
                    <div className='grid gap-8 grid-cols-1 px-10 cursor-pointer w-[80%] '>
                        {links.map((item) => (
                            <div key={item.id} className='shadow-md shadow-gray-700 rounded-lg bg-white'>
                            <h2 className='text-center p-2 text-xs font-semibold'>{item.heading}</h2>
                                <img src={item.imagelink} alt="" className='border-2 border-gray-500' />
                                <div className='flex justify-between items-center p-2 text-xs font-semibold '>
                                    <a target="_blank" className='active:text-xl hover:font-bold' href={item.link} > Demo </a>
                                    <a target="_blank" className='active:text-xl hover:font-bold' href={item.code} > Code </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

    </>
    )
}

export default Project




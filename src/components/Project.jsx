import React from 'react'
import todo from '../assets/todo.png'
import passwordGenerator from '../assets/passwordgenerator.png'
import rashiRatan from '../assets/rashiratan.png'

const Project = () => {
    const links = [
        {
            id: 1,
            imagelink: todo,
            link : 'https://snehamalik09.github.io/ToDo-App-React.js/',
            code: 'https://github.com/snehamalik09/ToDo-App-React.js'
        },
        {
            id: 2,
            imagelink: passwordGenerator,
            link : 'https://snehamalik09.github.io/Password-Generator---React/',
            code : 'https://github.com/snehamalik09/Password-Generator---React',
        },
        {
            id: 3,
            imagelink: rashiRatan,
            link : 'https://github.com/snehamalik09/Rashi-Ratan',
            code: 'https://github.com/snehamalik09/Rashi-Ratan',
        },

    ]
    return (

    <>
            <div name="Project" className='md:w-full w-[90%] justify-center mx-auto flex flex-col md:mt-48 lg:gap-36 '>
                <h1 className='text-center text-3xl sm:text-4xl font-bold text-black my-16 lg:m-0'>PROJECTS</h1>
                <div className=' flex flex-col md:max-w-screen-lg w-full justify-center mx-auto   '>
                    <div className='grid gap-8 grid-cols-2 md:grid-cols-3 md:px-0 px-10 cursor-pointer '>
                        {links.map((item) => (
                            <div key={item.id} className='shadow-md shadow-gray-700 rounded-lg bg-white hover:scale-105'>
                                <img src={item.imagelink} alt="" className='border-2 border-gray-500' />
                                <div className='flex justify-between items-center p-2 md:p-4 text-xs md:text-lg font-semibold '>
                                    <a target="_blank" className='active:text-xl' href={item.link} > Demo </a>
                                    <a target="_blank" className='active:text-xl' href={item.code} > Code </a>
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




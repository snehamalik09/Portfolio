import React, { useState } from 'react'
import HeroImage from '../assets/myHeroImage.jpg'
import { Link } from 'react-scroll'
const Home = () => {
     
    return (
        <div name="Home">
            <div className=' sm:max-w-screen-lg sm:flex  justify-center items-center mx-auto p-[12]  '>  
        <div className='h-full sm:h-screen sm:flex  justify-center items-center mx-auto sm:p-0 flex-row  gap-[4%] p-10 '>
            <div className='sm:max-w-[30%] justify-center mx-auto item-center flex max-w-[60%] mt-[17%] mb-[10%] sm:my-0'>
                <img src={HeroImage} alt="My Image" className='rounded-[50%] '/>
            </div>    

            <div className='sm:max-w-[60%] max-w-[85%] font-semibold justify-center mx-auto item-center flex flex-col text-sm sm:text-lg' >
                <h1 className='text-2xl'>Front End Developer</h1>
                <p className='text-black font-normal text-md my-2'> Welcome to my portfolio! I'm Sneha, an aspiring web developer driven by curiosity and a passion for innovation. Currently, I'm deeply engaged in exploring the realm of computer applications at GGSIPU, with ambitions to evolve into a proficient full stack developer. </p>
                <div>
                <button className=' bg-my-violet p-[1%] flex items-center group rounded-sm text-sm font-normal sm:text-lg mt-[4%]'> <Link to="Portfolio" smooth duration={500}> Portfolio </Link> <span className="material-symbols-outlined group-hover:rotate-90 text-sm sm:text-xl"> arrow_right_alt </span> </button>
                </div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default Home

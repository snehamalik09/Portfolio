import React, { useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
    const[nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Skills'
        },
        {
            id: 2,
            link: 'Experience'
        },
        {
            id: 3,
            link: 'Project'
        },
        {
            id: 4,
            link: 'Education'
        },
        {
            id: 5,
            link: 'Contact'
        },
    ];
     
    return (
        <>
            <div className='flex justify-between items-center w-full h-20 px-12 fixed bg-dark-violet z-40'>
                <div>
                <p className='text-white font-semisbold text-4xl'>Portfolio</p>
                </div>

                <div>
                <ul className='text-white text-lg font-semibold hidden md:flex cursor-pointer' >
                    {links.map( link => (
                        <li key={link.id} className='mx-2 hover:scale-95'  > <Link to={link.link} smooth duration={500}> {link.link} </Link>  </li>
                    ))}
                </ul>
                </div>

                <div className='hidden md:block hover:scale-95'>
                    <a href="https://github.com/snehamalik09" target="_blank" className='border-4 py-2 px-3 rounded-xl border-purple-950 text-white '> Github Profile </a>
                </div>

                <div onClick={() => setNav(!nav)} className='cursor-pointer md:hidden z-10' >
                    {nav ? <span className="material-symbols-outlined text-white"> close </span>  : <span className="material-symbols-outlined text-white md:hidden cursor-pointer"> menu </span>  }
                </div>


                {nav ? <ul className='bg-dark-violet opacity-95 text-white text-4xl flex flex-col font-semibold justify-center items-center w-full h-screen absolute top-0 left-0 cursor-pointer' >
                    {links.map( link => (
                        <li key={link.id} className='mx-2 w-full text-center p-3 h-[10%]'> <Link onClick={() => setNav(!nav)}  to={link.link} smooth duration={500}> {link.link} </Link> </li>
                    ))}
                </ul> : "" }
                

            
                

            </div>
        </>
    )
}

export default Navbar

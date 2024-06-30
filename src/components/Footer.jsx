import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

const Footer = () => {

    const links = [
        {
          id: 1,
          child: (
            <>
              <CiLinkedin />
            </>
          ),
          href: 'https://www.linkedin.com/in/snehamalik09/'
        },
        {
          id: 2,
          child: (
            <>
              <FaGithub />
            </>
          ),
          href: 'https://github.com/snehamalik09'
        },
        {
          id: 3,
          child: (
            <>
              <MdOutlineMail />
            </>
          ),
          href: 'mailto:snehamalik962003@gmail.com'
        }
      ]
    return (
        <>

            <div className='bg-dark-violet w-full h-20 md:mt-0 mt-20 relative bottom-0 flex items-center justify-end sm:justify-between text-white text-xl '>
            <div className='mx-14 hidden sm:block'>Sneha Malik</div>
            <ul className='flex gap-3 sm:gap-5 mr-14 '>
                
                {links.map(item => (
                    
                        <li key={item.id} className='hover:scale-105' > <a  href={item.href} target="_blank"> {item.child} </a> </li>
                    
                ))}
                </ul>

            </div>







        </>
    )
}

export default Footer

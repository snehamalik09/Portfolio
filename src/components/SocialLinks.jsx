import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import resume from "../../Sneha Malik Resume.pdf"

const SocialLinks = () => {

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
    },
    {
      id: 4,
      child: (
        <>
          <FaDownload />
        </>
      ),
      href: resume,
      download: true
    }
  ]

  return (
    <div className='hidden text-xl lg:flex flex-col text-white top-[40%] left-0 fixed cursor-pointer' >
      <ul>
        {links.map((item) => (
          <li key={item.id}
            className={'flex flex-col bg-dark-violet text-black item-center px-3 py-3 border-b-2 border-white'} >
            <a key={item.id} href={item.href} target="_blank" rel="noreferrer" download={item.download} className='flex justify-between item-center w-full gap-6'>
              {item.child}
            </a>
          </li>
        ))}


      </ul>

    </div>


  )
}

export default SocialLinks

import React from 'react'
import certificate from '../assets/certificate.png'
import certificatepdf from '../assets/InternshipLetter.pdf'

const Experience = () => {

    const links = [
        {
            id: 1,
            src: certificate,
            link: certificatepdf,
            title: "Front End Development Intern",
            companyname: "Comely Enterprises",
            duration: "1 month",
            experience:"I briefly joined Comely Enterprises as a front-end developer. The team at Comely Enterprises was not only experienced but also exceptionally supportive, providing me with ample opportunities to learn and grow. However, my tenure was cut short due to the colleges reopening in offline mode. Nonetheless, during my time there, I gained valuable professional experience and had the privilege of immersing myself in a positive work culture. This opportunity allowed me to demonstrate my skills and unwavering commitment to delivering high-quality work.",
        },

    ]


    return (

        <div name="Experience">

            <div className='w-full md:max-h-min flex flex-col gap-20 my-32 md:my-60'>

                <div>
                    <h1 className='text-center text-3xl sm:text-4xl font-bold text-black'>EXPERIENCE</h1>
                </div>


                <div className='mx-auto flex flex-col  text-sm font-semibold md:text-lg w-full'>

                    {links.map((item) => (
                        <div key={item.id} className='mx-auto flex gap-20 items-center justify-center'>

                            <div className='sm:flex sm:flex-col sm:items-center sm:size-48 border-2 border-black hidden'>
                                <img src={item.src} alt="" />
                                <a href={item.link} target="_blank" className='text-sm font-semibold p-2 cursor-pointer hover:font-bold'>View Certificate</a>
                            </div>
                            
                            <div className='flex flex-col items-center max-w-[75%] sm:max-w-[50%]'>
                                <ul className='list-disc font-normal'>
                                    <li> <b>Position Title - </b> {item.title} </li>
                                    <li> <b>Company Name - </b> {item.companyname} </li>
                                    <li> <b>Duration - </b> {item.duration} </li>
                                    <li> <b>Experience - </b> {item.experience}  </li>
                                </ul>
                            </div>
                            
                        </div>

                    ))}
                    
                    <a href={certificatepdf} target="_blank" className='text-sm font-semibold mx-auto sm:hidden p-2 cursor-pointer border-2 border-black mt-8 hover:font-bold'>View Certificate</a>
                </div>

            </div>
        </div>

    )
}

export default Experience




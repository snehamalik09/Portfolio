import React from 'react'
import { useState} from 'react'

const Education = () => {
    const [show, setShow] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1);

    const links = [
        {
            id: 1,
            title: "POSTGRADUATION",
            content1: "Master's of Computer Applications",
            content2: "Vivekananda Institute Of Professional Studies affiliated by,",
            content3: "Guru Gobind Singh Indraprastha University",
            content4 : "Gpa - 9.7"
        },
        {
            id: 2,
            title: "UNDERGRADUATION",
            content1: "Bachelor Of Science (Physical Sciences)",
            content2: "Kalindi College affiliated by,",
            content3: "University Of Delhi",
            content4:  "Cgpa - 8.879"
        },
        {
            id: 3,
            title: "SENIOR SECONDARY EDUCATION",
            content1: "Siddharth International Public School",
            content2: "CBSE Board",
            content3: "Percentage - 82.2%"        
        },
        {
            id: 4,
            title: "SECONDARY EDUCATION",
            content1: "Siddharth International Public School",
            content2: "CBSE Board",
            content3: "Percentage - 87%"                
        },
    ]

    const showInfo = (id) => {
        setActiveIndex(activeIndex===id? -1 : id);   
    }

    return (

        <div name="Education">

            <div className='w-full md:max-h-min flex flex-col gap-12 my-32 md:my-60'>

                <div>
                    <h1 className='text-center text-3xl sm:text-4xl font-bold text-black'>EDUCATION</h1>
                </div>

                
                <div className='mx-auto flex flex-col text-sm font-semibold md:text-lg w-full'>
                    {links.map((item) => (
                        <div key={item.id} className='mx-auto md:w-[1/2] xl:w-2/3 w-[90%]'>
                            <div onClick={() => showInfo(item.id)} className='mx-auto bg-nude-violet md:w-2/3 w-[75%] md:px-10 md:py-5 py-3 px-7 flex justify-between items-center cursor-pointer border-2 border-b-dark-violet'>
                                {item.title}
                                <button className='font-bold text-xl'> { activeIndex ==item.id? '-' : '+' } </button>
                            </div>

                            { activeIndex==item.id ? <div className='mx-auto bg-nude-violet md:w-2/3 w-[75%] font-normal px-10 py-5 max-h-96 border-1 border-r-0 border-l-0 border-dark-violet'>
                                <ul className='list-disc sm:ml-10'>
                                    <li> {item.content1} </li>
                                    <li> {item.content2} </li>
                                    <li> {item.content3} </li>
                                    {item.content4 ? <li> {item.content4} </li> : ""} 
                                </ul>
                                </div> : ""  }
                                

                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default Education




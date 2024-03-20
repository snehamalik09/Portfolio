import React from 'react'

const Contact = () => {
    return (
        <div name="Contact">
            <div className='w-3/4 lg:w-3/4 lg:pt-20 lg:pb-28 px-18 py-12 h-full md:my-[18%]  flex flex-col justify-center  items-center mx-auto gap-12 border-4 border-black rounded-xl text-black'>
                <h1 className='text-center text-2xl sm:text-4xl font-bold text-black'>CONTACT</h1>

                <form action="https://getform.io/f/lajnnpoa" method="POST" className = "flex flex-col h-full gap-3 w-3/4 lg:w-1/2 md:w-2/3">
                        <input type="text" placeholder="Username" className=' p-2 bg-white border-black border-[3px]' />
                        <input type="text" placeholder="password" className='p-2 bg-white border-[3px] border-black' />
                        <textarea className='bg-white border-[3px] border-black  p-2' name="message" cols="30" rows="4" placeholder="Message"></textarea>
                        <button className='bg-blue-800 px-5 py-2 lg:w-2/6 rounded-md mx-auto my-2 border-2 hover:bg-white hover:text-blue-800 hover:border-blue-800 hover:font-semibold duration-500'> Let's Talk</button>
                </form>
                </div>
        </div>
    )
}

export default Contact

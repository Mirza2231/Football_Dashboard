import React from 'react'
// import image from '../assets/team/07b133e78156c97e369946d65b4bfef6.jpg'
import team from './JsonFiles/team.json'


const Team = (props) => {
    return (
        <>
            {/* Teams Sec Start  */}
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-center p-5 text-white">{props.heading}</h1>
            <div className='overflow-y-auto h-3/4 scrollbarstyle px-5'>
                <div className='flex flex-wrap gap-2'>
                    {/* Card Sec Start  */}
            { team.map(record=>(

                    <div className='h-2/6 w-[32%] text-white bg-[#111312]'>
                        <div className='rounded flex flex-col justify-between gap-10 p-7 shadow-lg'>
                            <div className='flex justify-between items-center gap-5'>

                            <span>
                                <img src={record.teamlogo} className='w-24' alt='ass'/>

                            </span>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-xl capitalize'>{record.name}</h1>
                                <span className='text-base'>Regular Championship</span>
                            </div>
                            </div>
                            <span className='text-6xl'>{record.rating}</span>
                            <div className='flex flex-col gap-6'>
                                {/* bar Sec 1 Start */}
                                <div className='flex justify-between'>

                                    <h4 className='text-[#8ea2ab] uppercase'>Win</h4>
                                    <h4 className='text-[#8ea2ab] uppercase'> {record.Win}</h4>
                                </div>
                                {/* bar Sec 1 End */}
                                {/* bar Sec 2 Start */}
                                <div className='flex justify-between'>


                                <h4 className='text-[#8ea2ab] uppercase'>Goal Scored</h4>
                                    <h4 className='text-[#8ea2ab] uppercase'> {record.goal}</h4>
                                </div>
                                {/* bar Sec 2 End */}
                                {/* bar Sec 3 Start */}
                                <div className='flex justify-between'>

                                <h4 className='text-[#8ea2ab] uppercase'>Losses</h4>
                                    <h4 className='text-[#8ea2ab] uppercase'>{record.losses}</h4>
                                </div>
                                {/* bar Sec 3 End */}
                                {/* bar Sec 4 Start */}
                                <div className='flex justify-between'>

  
                                <h4 className='text-[#8ea2ab] uppercase'>Draw</h4>
                                    <h4 className='text-[#8ea2ab] uppercase'> {record.draw}</h4>
                                </div>
                                {/* bar Sec 4 End */}
                            </div>
                        </div>
                    </div>
            ))}
                    {/* Card Sec Start  */}

                </div>

            </div>
            {/* Teams Sec End  */}

        </>
    )
}

export default Team
import React from 'react'
// import image from '../assets/Players/20801.png'
import playedmat from './JsonFiles/playedmatches.json'


const PrevMatch = (props) => {
    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-center p-5 text-white">{props.heading}</h1>
            <div className='overflow-y-auto h-3/4 scrollbarstyle px-5'>
                <div className='flex flex-wrap gap-y-2 gap-x-2'>
                    {/* Card Sec Start  */}
                    {playedmat && playedmat.map(record=>(


                        <div className='h-2/6 w-[49%] text-white bg-[#111312]'>
                        <div className='rounded flex flex-col justify-between gap-10 p-7 shadow-lg'>
                            <div className='flex justify-between items-center gap-5'>

                                <div className='flex flex-col gap-1 items-center justify-center'>
                                    <span>
                                        <img src={record.team1image} className='w-28' alt='ass' />
                                    </span>
                                    <span className='text-base'>{record.team1}</span>
                                </div>
                                <span>VS</span>
                                <div className='flex flex-col gap-1 items-center justify-center'>
                                    <span>
                                        <img src={record.team2image} className='w-28' alt='ass' />
                                    </span>
                                    <span className='text-base'>{record.team2}</span>
                                </div>
                            </div>
                            <span className='text-5xl'>State</span>
                            <div className='flex flex-col gap-6'>
                                {/* bar Sec 1 Start */}
                                <div className='flex justify-between'>

                                    <h6 className='text-[#8ea2ab]  tracking-widest text-xs uppercase'>how many goals did the goal keeper save:</h6>
                                    <h6 className='text-[#8ea2ab]  tracking-widest text-xs uppercase'> {record.savedgoal}</h6>
                                </div>
                                {/* bar Sec 1 End */}
                                {/* bar Sec 2 Start */}
                                <div className='flex justify-between'>

                                    <h6 className='text-[#8ea2ab] tracking-widest  text-xs uppercase'>which player scored the highest</h6>
                                    <h6 className='text-[#8ea2ab]  tracking-widest text-xs uppercase'> {record.highscoreplayer}</h6>
                                </div>  
                                {/* bar Sec 2 End */}
                                {/* bar Sec 3 Start */}
                                <div className='flex justify-between'>

                                    <h6 className='text-[#8ea2ab]  tracking-widest text-xs uppercase'>which player had most assists</h6>
                                    <h6 className='text-[#8ea2ab]  tracking-widest text-xs uppercase'> {record.mostassist}</h6>
                                </div>

                                {/* bar Sec 3 End */}
                                {/* bar Sec 4 Start */}
                                <div className='flex justify-between'>

                                    <h6 className='text-[#8ea2ab]  tracking-widest text-xs uppercase'>which player had the best defence</h6>
                                    <h6 className='text-[#8ea2ab]  tracking-widest text-xs uppercase'> {record.bestdefence}</h6>
                                </div>

                                {/* bar Sec 4 End */}
                            </div>
                        </div>
                    </div>

                    ))}
                                        {/* Card Sec End  */}
                </div>

            </div>
        </>
    )
}

export default PrevMatch
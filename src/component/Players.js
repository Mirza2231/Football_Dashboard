import React from 'react'
// import image from '../assets/Players/20801.png'
import player from './JsonFiles/player.json'


const Players = (props) => {
  return (
    <>
            {/* Player Sec Start  */}

    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-center p-5 text-white">{props.heading}</h1>
    <div className='overflow-y-auto h-3/4 scrollbarstyle px-5'>
                <div className='flex flex-wrap gap-2'>
                    {/* Card Sec Start  */}
                    {player && player.map(record=>(
                        
                    <div className='h-2/6 w-[32%] text-white bg-[#111312]'>
                        <div className='rounded flex flex-col justify-between gap-10 p-7 shadow-lg'>
                            <div className='flex justify-between items-center gap-5'>

                            <div className='flex flex-col gap-1'>
                                <h1 className='text-xl capitalize'>{record.name}</h1>
                                <span className='text-base capitalize'>{record.teamname}</span>
                            </div>
                            <span>
                                <img src={record.image} className='w-28' alt='ass'/>
                            </span>
                            </div>
                            <span className='text-5xl'>States</span>
                            <div className='flex flex-col gap-6'>
                                {/* States Sec 1 Start */}
                                <div className='flex justify-between'>

                                    <h4 className='text-[#8ea2ab] uppercase'>Minutes Played</h4>
                                    <h4 className='text-[#8ea2ab] uppercase'> {record.minutes}</h4>
                                </div>
                                {/* States Sec 1 End */}
                                {/* States Sec 2 Start */}
                                <div className='flex justify-between'>


                                <h4 className='text-[#8ea2ab] uppercase'>Goal Scored</h4>
                                    <h4 className='text-[#8ea2ab] uppercase'> {record.goal}</h4>
                                </div>
                                {/* States Sec 2 End */}
                                {/* States Sec 3 Start */}
                                <div className='flex justify-between'>

                                <h4 className='text-[#8ea2ab] uppercase'>Assist</h4>
                                    <h4 className='text-[#8ea2ab] uppercase'> {record.Assist}</h4>
                                </div>
                                {/* States Sec 3 End */}
                                {/* States Sec 4 Start */}
                                <div className='flex justify-between'>

  
                                <h4 className='text-[#8ea2ab] uppercase'>Game Played</h4>
                                    <h4 className='text-[#8ea2ab] uppercase'> {record.Gameplayed}</h4>
                                </div>
                                {/* States Sec 4 End */}
                            </div>
                        </div>
                    </div>
                    ))}
                    {/* Card Sec Start  */}

                </div>

            </div>
            {/* Player Sec End  */}
    </>
  )
}

export default Players
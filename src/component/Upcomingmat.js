import React from 'react'
// import image from '../assets/Players/20801.png'
import UpcomRcord from './JsonFiles/upcomingmat'

const Upcomingmat = (props) => {
  return (
    <>
    {/* Upcoming Matches Sec Start */}

    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-center p-5 text-white">{props.heading}</h1>
    <div className='overflow-y-auto h-3/4 scrollbarstyle px-5'>

    {UpcomRcord.map(record => (
          <div className='pb-5 border border-gray-700 rounded-lg mb-5 bg-[#111312]' key={record.id}>
            {/* Upcoming Matches team Sec Start  */}
            <div className='p-5 rounded-sm'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center'>
                  <img src={record.Team1Img} className='w-20 h-20' alt="asa"/>
                  <h1 className='my-4 text-4xl text-gray-300 capitalize'>{record.Team1}</h1>
                </div> 
                <h1 className='text-white uppercase text-3xl font-bold'>VS</h1>
                <div className='flex justify-between items-center'>
                  <h1 className='my-4 text-4xl text-gray-300 capitalize'>{record.Team2}</h1>
                  <img src={record.Team2Img} className='w-20 h-20' alt="asa"/>
                </div>
              </div>
            </div>
            {/* Upcoming Matches team Sec End  */}
            {/* Upcoming Matches Date & Venue Sec Start  */}
            <div className='border justify-center border-gray-700 flex gap-3'>
              <div className='flex gap-3 px-5 py-2'>
                <h1 className='font-bold text-white'>Date:</h1>
                <h2 className='font-bold text-white'>{record.date}</h2>
              </div>
              <div className='flex  gap-3 px-5 py-2'>
                <h1 className='font-bold text-white'>Venue:</h1>
                <h2 className='font-bold text-white'>{record.venue}</h2>
              </div>
            </div>
            {/* Upcoming Matches Date & Venue Sec End  */}
          </div>
        ))}




      </div>

    {/* Upcoming Matches Sec End */}

    </>
  )
}

export default Upcomingmat
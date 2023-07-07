import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import Upcomingmat from './component/Upcomingmat';
import Team from './component/Team';
import Players from './component/Players';
import Matchschedule from './component/Matchschedule';
import PrevMatch from './component/PrevMatch';

function App() {
  return (
    <>
        <Navbar />
        <div className='ml-0 sm:ml-64 bg-[#080909] h-screen p-3 mt-10'>
      <Routes> 
        <Route path="/" element={<Upcomingmat heading="Upcoming Matches"/>} />
        <Route path="/team" element={<Team heading="Teams Perfomance"/>} />
        <Route path="/player" element={<Players heading="Players Perfomance"/>} />
        <Route path="/schedule" element={<Matchschedule heading="Match Schedule" />} />
        <Route path="/prev" element={<PrevMatch heading="Previuos Matches"/>} />




      </Routes>
      </div>
    </>
  );
}

export default App;

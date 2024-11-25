import  { useState } from 'react';
import img from '../../../../src/assets/book.webp';
import GradesPopup from './GradesPopup';
import { NavLink } from 'react-router-dom';


function RegisteredSubjectCard() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="flex flex-col items-start justify-between p-3 space-y-6 bg-white border shadow-sm lg:items-center rounded-xl lg:flex-row lg:space-y-0">
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <div className="lg:w-[17%] w-[80%]">
          <img className="rounded-lg" src={img} alt="" />
        </div>
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">Subject Name</h1>
          <p className="text-lg font-semibold text-pTag">
            Teacher <span className="font-normal">Mr. Ali</span>
          </p>
          <p className="text-lg font-semibold text-pTag">
            Schedule on <span className="font-normal">Monday - 12:30PM</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:w-[25%] w-[100%] items-start gap-2 lg:border-l-4 border-BgColor px-4">
        <button
          className="w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary"
          onClick={handleOpenPopup}
        >
          Graded
        </button>
       <NavLink to='/StudentChat' className="w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary">
       <button className="w-full text-sm font-semibold text-white rounded-lg bg-primary">
          Chat Professor
        </button>
       </NavLink>
       <NavLink to='/StudentChat' className='w-full'>
       <button className="w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary">
          Group Chat
        </button>
       </NavLink>
      </div>

      {showPopup && <GradesPopup onClose={handleClosePopup} />}
    </div>
  );
}

export default RegisteredSubjectCard;

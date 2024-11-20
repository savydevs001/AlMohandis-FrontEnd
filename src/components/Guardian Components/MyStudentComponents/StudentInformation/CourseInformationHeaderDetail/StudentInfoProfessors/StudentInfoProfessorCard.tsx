import { NavLink } from 'react-router-dom';
import professorsImg from '../../../../../../assets/professorsImg.png';





function StudentInfoProfessorCard() {
  return (
    <div className='mt-8'>
      <div className='p-4 space-y-1 bg-white shadow-sm w-[100%] rounded-xl flex items-center lg:items-start flex-col'>
        <img className='' src={professorsImg} />
        <h1 className='text-xl font-semibold'>Professor Name</h1>
        <p className='text-lg text-pTag'>Field</p>
        <NavLink to=''>
          <button className='px-4 py-2 font-semibold text-white rounded-md bg-primary'>Chat</button>
        </NavLink>
      </div>
    </div>
  );
}

export default StudentInfoProfessorCard;



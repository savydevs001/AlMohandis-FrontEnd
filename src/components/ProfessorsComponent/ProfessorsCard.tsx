import { NavLink } from 'react-router-dom';
import professorsImg from '../../assets/professorsImg.png';

interface Professor {
  id: string; // Assuming each professor has a unique ID
  fullName: string;
  department: string; // Adjust based on your API response structure
}

interface ProfessorsCardProps {
  professor: Professor;
}

function ProfessorsCard({ professor }: ProfessorsCardProps) {
  return (
    <div className='mt-8'>
      <div className='p-4 space-y-1 bg-white shadow-sm w-[100%] rounded-xl flex items-center lg:items-start flex-col'>
        <img className='' src={professorsImg} alt={professor.fullName} />
        <h1 className='text-xl font-semibold'>{professor.fullName}</h1>
        <p className='text-lg text-pTag'>{professor.department}</p>
        <NavLink to='professorsDetail'>
          <button className='px-4 py-2 font-semibold text-white rounded-md bg-primary'>View</button>
        </NavLink>
      </div>
    </div>
  );
}

export default ProfessorsCard;
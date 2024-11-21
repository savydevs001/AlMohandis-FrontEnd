import { NavLink } from "react-router-dom";

interface UpComingAssignmentCardProps {
  id:string
  title: string;
  points: string;
  courseTitle:string
}

function UpComingAssignmentCard({id, title, points,courseTitle }:UpComingAssignmentCardProps) {
  return (
    <NavLink to={`/myassignments/view/${id}`} className=''>
      <div className="flex items-start justify-between w-full p-2 px-5 bg-white border rounded-xl shadow-sm border-[#C9C9C9] mt-4">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p>{courseTitle}{" > "}Chapter 1</p> 
        </div>
        <p className="text-sm text-pTag">{points}</p>
      </div>
    </NavLink>
  );
}

export default UpComingAssignmentCard;
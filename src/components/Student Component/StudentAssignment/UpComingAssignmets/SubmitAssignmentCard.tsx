import { NavLink } from "react-router-dom";
interface SubmitAssignmentCardProps {
  id:string;
  title: string;
  points: string;
  courseTitle:string
}


function SubmitAssignmentCard({id, title, points ,courseTitle}:SubmitAssignmentCardProps) {
  return (
    <NavLink to={`/myassignments/view/${id}`} className=''>
      <div className="flex items-start justify-between w-full p-2 px-5 bg-white border rounded-xl shadow-sm border-[#C9C9C9] mt-4">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="flex justi">{courseTitle} {">"} Chapter 1 </p> 

        </div>
        <p className="text-sm text-pTag">{points}</p>
      </div>
    </NavLink>
  );
}

export default SubmitAssignmentCard;
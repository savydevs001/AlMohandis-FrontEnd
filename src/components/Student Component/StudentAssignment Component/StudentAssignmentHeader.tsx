import { NavLink } from "react-router-dom";

function StudentAssignmentHeader() {
  return (
    <div className="flex items-center gap-6 text-pTag">
      <NavLink 
        to="/studentAssignments" 
        end // Ensures only exact path is active for this NavLink
        className={({ isActive }) => 
          isActive ? "text-black border-b border-primary pb-1" : "hover:text-black"
        }
      >
        UpComing
      </NavLink>
      <NavLink 
        to="/studentAssignments/SubmitAssignment" 
        className={({ isActive }) => 
          isActive ? "text-black border-b border-primary pb-1" : "hover:text-black"
        }
      >
        Submitted
      </NavLink>
      <NavLink 
        to="/studentAssignments/AssignmentGrades" 
        className={({ isActive }) => 
          isActive ? "text-black border-b border-primary pb-1" : "hover:text-black"
        }
      >
        Graded
      </NavLink>
    </div>
  );
}

export default StudentAssignmentHeader;

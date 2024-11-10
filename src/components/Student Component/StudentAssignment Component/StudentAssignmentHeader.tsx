import { NavLink } from "react-router-dom";

function StudentAssignmentHeader() {
  return (
    <div className="flex items-center gap-6 text-pTag">
      <NavLink 
        to="/myassignments" 
        end // Ensures only exact path is active for this NavLink
        className={({ isActive }) => 
          isActive ? "text-black border-b border-primary pb-1" : "hover:text-black"
        }
      >
        UpComing
      </NavLink>
      <NavLink 
        to="/myassignments/submitted" 
        className={({ isActive }) => 
          isActive ? "text-black border-b border-primary pb-1" : "hover:text-black"
        }
      >
        Submitted
      </NavLink>
      <NavLink 
        to="/myassignments/graded" 
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

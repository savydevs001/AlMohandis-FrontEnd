import UserManagementHeader from "../../components/AdminComponent/UserManagementComponent/UserManagementHeader";
import GuardianSidebar from "../../components/GuardianComponents/GuardianSidebar";
import ClassesSchudle from "../../components/TeacherComponent/Schudele Component/ClassesSchudle";

function GaurdianSchudle() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <GuardianSidebar />
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <div className="flex-1 space-y-6">
        <UserManagementHeader title="Schedule"/>
        <div className="flex flex-col space-y-1">
          <label className="font-semibold" htmlFor="">Students</label>
          <select className="w-[30%] rounded-lg border-slate-300" name="" id="Students">
            <option value="">Student Name</option>
            <option value="">Student Name</option>
            <option value="">Student Name</option>
            <option value="">Student Name</option>
          </select>
        </div>
       <div className="">
       <ClassesSchudle/>
       <ClassesSchudle/>
       <ClassesSchudle/>
       <ClassesSchudle/>
       </div>
        </div>
      </div>
    </div>
  );
}

export default GaurdianSchudle;

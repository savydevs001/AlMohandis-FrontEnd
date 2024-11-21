import UserManagementHeader from "../../UserManagementComponent/UserManagementHeader"
import CreateManagementGroupHeader from "./ManageGrpHeadr";
import CreateManagementGroupSidebar from "./ManagGroupSidebar";

function CreateManagementGroup() {
        
  return (
    <div className="flex-1 space-y-8">
<UserManagementHeader title="Create/Edits Groups"/>
<div className="flex flex-col gap-4 lg:flex-row">
     <CreateManagementGroupSidebar/>
    <CreateManagementGroupHeader/>

</div>
    </div>
  )
}

export default CreateManagementGroup

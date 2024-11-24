
import UserManagementHeader from "../../AdminComponent/UserManagementComponent/UserManagementHeader"
import AssistantCard from "./AssistantCard"

function AssistantsComp() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Permissions"/>
      <div className="flex items-center justify-end">
            <button className="px-4 py-1 text-lg font-semibold text-white rounded-md bg-primary">Add Assistant</button>
      </div>
      <div className="grid grid-cols-1 p-4 mt-6 mb-6 lg:p-8 gap-7 md:grid-cols-2 lg:grid-cols-3">
            <AssistantCard/>
            <AssistantCard/>
            <AssistantCard/>
            <AssistantCard/>
            <AssistantCard/>
            <AssistantCard/>
            <AssistantCard/>
      </div>
    </div>
  )
}

export default AssistantsComp

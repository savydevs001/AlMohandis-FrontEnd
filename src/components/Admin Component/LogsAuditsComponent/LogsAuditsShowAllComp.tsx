import UserManagementHeader from "../UserManagementComponent/UserManagementHeader"
import LogsAuditDropDown from "./LogsAuditDropDown"
import LogsAudtishowTable from "./LogsAuditTableComp/LogsAudtishowTable"

function LogsAuditsShowAllComp() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Logs and Audits"/>
      <LogsAuditDropDown/>
      <div>
            <LogsAudtishowTable/>
      </div>
    </div>
  )
}

export default LogsAuditsShowAllComp

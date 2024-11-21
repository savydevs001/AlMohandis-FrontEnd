
import { GiGraduateCap } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

import { MdAssignment } from 'react-icons/md'
import { FaMessage } from 'react-icons/fa6'
import { FcApproval } from 'react-icons/fc'
import Card from '../../TeacherComponent/DashboardComponent/Card'

function ActiveViewCards() {
  return (
    <div>
         <div className="grid grid-cols-1 gap-4 mt-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <NavLink to={'/courses'}><Card icon={<GiGraduateCap />} title="Active Students" description="27,000 Active Student" /></NavLink>
        <NavLink to={'/pending'}><Card icon={<FcApproval />} title="Active Teachers" description="2000 Active Teachers" /></NavLink>
        <Card icon={<MdAssignment />} title="Active Courses" description="2300 Active Courses" />
        <Card icon={<FaMessage />} title="Pending Approvals" description="60 Pending Course approvals" />
      </div>
    </div>
  )
}

export default ActiveViewCards

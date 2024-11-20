// import React from 'react'

import StudentInfoProfessorCard from "./StudentInfoProfessorCard"

function StudentInfoProfessors() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
   <StudentInfoProfessorCard />
   <StudentInfoProfessorCard />
   <StudentInfoProfessorCard />
   <StudentInfoProfessorCard />
   <StudentInfoProfessorCard />
   <StudentInfoProfessorCard />
    </div>
  )
}

export default StudentInfoProfessors

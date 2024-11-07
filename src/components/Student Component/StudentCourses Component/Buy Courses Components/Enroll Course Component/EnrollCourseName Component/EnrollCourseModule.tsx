// import React from 'react'

import ModuleDropdown from "./ModuleDropdown"

function EnrollCourseModule() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Course Modules</h1>
      <hr className="mt-4 border-black" />
      <div>
        <ModuleDropdown title="Module 1" lessonCount={10} lessons={['Lesson 1', 'Lesson 2', 'Lesson 3']} seasonName="Season 1 : Season 1 Name" />
        <ModuleDropdown title="Module 1" lessonCount={10} lessons={['Lesson 1', 'Lesson 2', 'Lesson 3']} seasonName="Season 2 : Season 2 Name" />
        <ModuleDropdown title="Module 1" lessonCount={10} lessons={['Lesson 1', 'Lesson 2', 'Lesson 3']} seasonName="Season 3 : Season 3 Name" />

      </div>

    </div>
  )
}

export default EnrollCourseModule

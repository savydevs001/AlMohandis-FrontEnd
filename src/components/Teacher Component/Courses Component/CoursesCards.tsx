import CoursesByMeCard from "./CoursesByMeCard";

function CoursesNav() {
  return (
    <div className="w-full">
      {/* Section 1: Courses By Me */}
      <div className="w-[100%] mt-6">
        <h1 className="text-2xl font-semibold text-primary">Course By Me</h1>
        <div className="overflow-x-auto scrollbar-hide max-w-[100%]">
          <div className="flex items-center gap-5 w-[600px]"> {/* Set a fixed width */}
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
          </div>
        </div>
      </div>

      {/* Section 2: Teacher 1 */}
      <div className="mt-6">
        <h1 className="text-2xl font-semibold text-primary">Teacher 1 Name</h1>
        <div className="overflow-x-auto scrollbar-hide max-w-[100%]"> {/* Make sure it's scrollable within this width */}
          <div className="flex items-center gap-5 w-[600px]"> {/* Set a fixed width */}
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
          </div>
        </div>
      </div>

      {/* Section 3: Teacher 2 */}
      <div className="mt-6">
        <h1 className="text-2xl font-semibold text-primary">Teacher 2 Name</h1>
        <div className="overflow-x-auto scrollbar-hide max-w-[100%]"> {/* Limit the width for scrolling */}
          <div className="flex items-center gap-5 w-[600px]"> {/* Set a fixed width */}
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesNav;

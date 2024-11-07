import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import ShowActivity from "./Show Lessons Component/ShowActivity";
import ShowModuleDetail from "./Show Lessons Component/ShowModuleDetails";
import StudentDashboardHeader from "./Show Lessons Component/StudentDashboardHeader";
import CourseMaterial from './CourseMaterial';

interface MediaSource {
  id: string;
  link: string;
  title: string;
  description: string;
  lessonId: string;
  channel: string;
  isFree: boolean;
  isPromotional: boolean;
}

interface Lesson {
  id: string;
  type: 'VIDEO' | 'AUDIO';
  chapterId: string;
  mediaSrc: MediaSource[];
  duration: string;
}

interface Chapter {
  id: string;
  name: string;
  type: 'VIDEO' | 'AUDIO';
  duration: string;
  link: string;
  lessons: Lesson[];
}

interface Question {
  id: string;
  questionText: string;
  answerType: string;
  options: any[];
  correctAnswer: string;
  assignmentId: string;
  examId: string | null;
  moduleId: string | null;
}


interface Assignment {
  id: string;
  title: string;
  moduleId: string;
  isFree: boolean;
  questions: Question[];
  submissions: any[];
}

interface Exam {
  id: string;
  title: string;
  moduleId: string;
  isFree: boolean;
  questions: Question[];
}

interface Module {
  type: 'CHAPTER' | 'ASSIGNMENT' | 'EXAM';
  chapters: Chapter[];
  assignments: Assignment[];
  exams: Exam[];
}

interface Part {
  modules: Module[];
}

interface Course {
  title: string;
  parts: Part[];
}

function Course1() {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection,setActiveSection] = useState<string|null>('Chapters'); 
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const token = Cookies.get('token');

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/student/courses/${courseId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Course = await response.json();
        setCourse(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId, token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleMaterialSelect = (item: string | null) => {
    setActiveItem(item);
  };

  const handleActiveSection=(section:string|null)=>{
    setActiveSection(section);
  }

  return (
    <div className="flex-1">
      <StudentDashboardHeader courseTitle={course?.title} />
      <div className="flex flex-col gap-4 mt-8 lg:flex-row">
        <div className="lg:w-[25%] w-[100%] flex flex-col lg:items-center items-start bg-white shadow-md">
          <CourseMaterial 
            course={course} 
            onCourseMaterialSelect={handleMaterialSelect} 
            onActiveSection={handleActiveSection}
          />
        </div>
        <div className="lg:w-[50%] w-full bg-white shadow-md">
          {course && <ShowModuleDetail course={course} activeSection={activeSection} activeItem={activeItem} />} 
        </div>
        <div className="lg:w-[25%] w-full">
          <ShowActivity />
        </div>
      </div>
    </div>
  );
}

export default Course1;


import { NavLink } from 'react-router-dom';
import ShowLessonHeader from '../../ShowLessonHeader';

const SingleExam: React.FC = () => {



  return (
    <div className="flex-1 p-5 space-y-5">
      <ShowLessonHeader/>
      <div className="flex items-start justify-between">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">Exam Title</h1>
          <p className="w-[100%] font-sans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores quo vel fugit totam, voluptatibus ipsa? 
            Unde nemo veniam ex doloremque, sint consequatur optio impedit beatae aperiam ullam quas provident. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quis quia blanditiis hic nam et laboriosam 
            consequatur quo, ducimus voluptatibus dicta facere aperiam, esse reprehenderit suscipit, vero neque sed cumque?
          </p>
        </div>
 
      </div>
     

      <div className="space-y-2">
            
       <p>Total Question <span className='font-bold'>10</span></p>
      </div>
     <NavLink to='/showQuestions'>
      <button className="px-4 py-2 font-semibold text-white rounded-md bg-primary">Start Exam</button>
      </NavLink>
    </div>
  );
};

export default SingleExam;

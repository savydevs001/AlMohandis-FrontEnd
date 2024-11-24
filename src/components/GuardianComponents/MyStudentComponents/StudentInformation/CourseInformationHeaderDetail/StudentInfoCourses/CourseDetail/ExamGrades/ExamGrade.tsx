import ExamGradeCard from "./ExamGradeCard"

type Props = {
  onView: () => void; // Add callback prop
};

const ExamGrade: React.FC<Props> = ({ onView }) => {
  return (
    <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
      <ExamGradeCard onView={onView} />
      <ExamGradeCard onView={() => {}}/>
      <ExamGradeCard onView={() => {}}/>
      <ExamGradeCard onView={() => {}}/>
      <ExamGradeCard onView={() => {}}/>
      <ExamGradeCard onView={() => {}}/>
    </div>
  )
}

export default ExamGrade

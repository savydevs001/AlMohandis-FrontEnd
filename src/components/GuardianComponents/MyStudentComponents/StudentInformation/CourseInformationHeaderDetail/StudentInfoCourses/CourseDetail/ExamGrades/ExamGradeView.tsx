import ExamOptionCard from "./ExamOptionCard";




const ExamGradeView: React.FC = () => {  

  return (
    <div className="flex-1 space-y-5">
      <div className="flex items-start justify-between mt-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Exam 1</h1>
          <p className="text-pTag">Chapter 1 Exam 1</p>
          <p className="text-xs text-pTag w-[60%]">Submitted on 28-02-2024</p>
        </div>
        <h5 className='text-2xl font-semibold text-primary'>07/10</h5>
      </div>
<div className="grid grid-cols-1 gap-6 px-6 lg:px-12 lg:grid-cols-2">
      <ExamOptionCard/>
      <ExamOptionCard/>
      <ExamOptionCard/>
      <ExamOptionCard/>
      <ExamOptionCard/>
      <ExamOptionCard/>
      <ExamOptionCard/>
</div>
  

    </div>
  );
};

export default ExamGradeView;






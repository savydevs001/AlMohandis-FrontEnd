// ExamQuestionOption.tsx
import React from 'react';

interface Props {
  optionText: string;
}

const ExamQuestionOption: React.FC<Props> = ({ optionText }) => {
  return (
    <div className="">
      <div className="flex items-center gap-4 p-4 bg-white border lg:px-10 rounded-xl border-pTag">
        <input type="radio" className="text-pTag" />
        <h1 className="text-xl">{optionText}</h1>
      </div>
    </div>
  );
}

export default ExamQuestionOption;
import { useState, ChangeEvent } from 'react';
import { FaPen } from 'react-icons/fa';

function GradeNowCard() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [marks, setMarks] = useState<string>('09');
  const [remarks, setRemarks] = useState<string>('');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleMarksChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMarks(e.target.value);
  };

  const handleRemarksChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRemarks(e.target.value);
  };

  return (
    <div
      onClick={!isEditing ? handleEditClick : undefined} // Click to edit
      className={`p-4 rounded-lg shadow-sm border ${
        isEditing ? 'bg-primary text-white rounded-lg' : 'bg-white text-black'
      }`}
    >
      <h2 className="text-lg font-semibold">Student 2</h2>
      <p className="text-md">Submission <span className='font-semibold'>25-09-2024 11:59PM</span></p>

      {isEditing ? (
        <>
          <input
            type="text"
            value={marks}
            onChange={handleMarksChange}
            className="w-12 mb-2 font-semibold text-center text-white bg-transparent border-none text-md focus:ring-0 focus:outline-none focus:border-none"
            placeholder="__"
          />
          <span className="text-md"> / 10</span>
          <p className="mb-2 ">Remarks</p>
          <div className="flex items-center p-1 border border-white rounded">
            <input
              type="text"
              value={remarks}
              onChange={handleRemarksChange}
              className="w-full text-white bg-transparent border-none focus:outline-none placeholder:text-white focus:ring-0 "
              placeholder="Add Remarks"
            />
            <FaPen className="ml-2 text-white cursor-pointer" onClick={handleSave} />
          </div>
        </>
      ) : (
        <>
          <p className="text-lg font-semibold text-primary">{marks} / 10</p>
        </>
      )}
    </div>
  );
}

export default GradeNowCard;

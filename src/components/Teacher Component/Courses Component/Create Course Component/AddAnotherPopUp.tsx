import React, { useState } from 'react';

interface AddAnotherPopUpProps {
  onClose: () => void; // Function to close the popup
  onAddLesson: (lessonType: string, chapterName: string) => void;
  availableChapters: string[];
}

const AddAnotherPopUp: React.FC<AddAnotherPopUpProps> = ({ onClose, onAddLesson, availableChapters }) => {
  console.log(availableChapters);
  const [selectedLesson, setSelectedLesson] = useState('Audio Lesson');
  const [selectedChapter, setSelectedChapter] = useState(availableChapters.length > 0 ? availableChapters[0] : '');

  const handleLessonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    
    setSelectedLesson(event.target.value);
  };

  const handleChapterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    
    setSelectedChapter(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedLesson && selectedChapter) {
      onAddLesson(selectedLesson, selectedChapter);
      onClose();
    }
  };

  const lessonOptions = ["Audio Lesson", "Video Lesson"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-md shadow-lg w-[30%] space-y-4">
        <div className='space-y-2'>
          <h5 className='font-semibold'>Chapters</h5>
          <select className='w-full border-none rounded-md outline-none bg-cardBg' value={selectedChapter} onChange={handleChapterChange}>
            {availableChapters.map((chapter, index) => (
              <option key={index} value={chapter}>{chapter}</option>
            ))}
          </select>
        </div>
        <div className='space-y-2'>
          <h5 className='font-semibold'>Lessons</h5>
          <select className='w-full border-none rounded-md outline-none bg-cardBg' value={selectedLesson} onChange={handleLessonChange}>
            {lessonOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className='flex gap-4'>
          <button type="submit" className="px-4 py-2 text-white rounded-lg bg-primary" onClick={handleSubmit}>Add Lesson</button>
          <button type="button" className="px-4 py-2 text-white rounded-lg bg-red-600" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddAnotherPopUp;
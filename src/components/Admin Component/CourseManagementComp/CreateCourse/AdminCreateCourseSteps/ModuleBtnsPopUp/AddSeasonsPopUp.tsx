import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface SeasonPopUpProps {
  onClose: () => void;
  setPartContainer: React.Dispatch<React.SetStateAction<{ name: string; value: string; modules: any[] }[]>>;
  partNumber: number;
  setPartNumber: React.Dispatch<React.SetStateAction<number>>;
}

const AddSeasonsPopUp: React.FC<SeasonPopUpProps> = ({ onClose, setPartContainer, partNumber, setPartNumber }) => {
  const [title, setPartTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [openingDate, setOpeningDate] = useState<string>('');
  const [completionTime, setCourseCompletionTime] = useState<number>(0);
  const [loading] = useState<boolean>(false);

  const validateForm = () => {
    return title.length > 0 && price > 0 && openingDate.length > 0 && completionTime > 0;
  };

  const handleAdd = () => {
    if (!validateForm()) {
      return;
    }

    const partName = `Part ${partNumber + 1}`;
    const partData = {
      title,
      price,
      openingDate,
      completionTime,
      modules: [] // Initialize modules as an empty array
    };
    console.log(partData)

    setPartContainer(prev => [
      ...prev,
      {
        name: partName,
        value: title,
        modules: []
      },
    ]);
    setPartNumber(prev => prev + 1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[90%] p-8 bg-white rounded-lg lg:w-1/3">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-semibold">Add Part</h3>
          <button disabled={loading} onClick={onClose}>
            <AiOutlineCloseCircle className="text-2xl text-red-500 cursor-pointer" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="">Part Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setPartTitle(e.target.value)}
              placeholder="Enter your title"
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              placeholder="Price"
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="">Opening Date</label>
            <input
              type="date"
              value={openingDate}
              onChange={(e) => setOpeningDate(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="">Expected Course Completion Time</label>
            <input
              type="number"
              value={completionTime}
              onChange={(e) => setCourseCompletionTime(parseInt(e.target.value))}
              placeholder="Expected Course Completion Time"
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="flex justify-start space-x-2">
            <button onClick={onClose} disabled={loading} className="px-4 py-2 text-white rounded bg-primary">Cancel</button>
            <button onClick={handleAdd} disabled={loading} className="px-4 py-2 text-white rounded bg-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSeasonsPopUp;
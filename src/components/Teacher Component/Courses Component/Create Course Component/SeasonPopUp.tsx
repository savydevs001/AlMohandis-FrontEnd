import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface SeasonPopUpProps {
  onClose: () => void;
}

const SeasonPopUp: React.FC<SeasonPopUpProps> = ({ onClose }) => {
  const [seasonName, setSeasonName] = useState('');
  const [price, setPrice] = useState('');
  const [openingDate, setOpeningDate] = useState('');
  const [completionTime, setCompletionTime] = useState('');
  const [expirationType, setExpirationType] = useState('noExpiration');
  const [expirationDate, setExpirationDate] = useState('');
  const [hideSeason, setHideSeason] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-1/3 p-8 bg-white rounded-lg">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-semibold">Add Season</h3>
          <AiOutlineCloseCircle onClick={onClose} className="text-2xl text-red-500 cursor-pointer" />
        </div>

        <div className="space-y-4">
          <div className='space-y-1'>
          <label htmlFor="">Season Name</label>
          <input
            type="text"
            value={seasonName}
            onChange={(e) => setSeasonName(e.target.value)}
            placeholder="Enter your title"
            className="w-full px-2 py-1 border rounded"
          />
          </div>

        <div className='space-y-1'>
            <label htmlFor="">Price</label>
        <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="w-full px-2 py-1 border rounded"
          />
        </div>

          <div className='space-y-1'>
          <label htmlFor="">Opening Date</label>
          <input
            type="date"
            value={openingDate}
            onChange={(e) => setOpeningDate(e.target.value)}
            placeholder="Opening Date"
            className="w-full px-2 py-1 border rounded"
          />
          </div>

        <div className='space-y-1'>
            <label htmlFor="">Expected Course Completion Time</label>
        <input
            type="text"
            value={completionTime}
            onChange={(e) => setCompletionTime(e.target.value)}
            placeholder="Expected Course Completion Time"
            className="w-full px-2 py-1 border rounded"
          />
        </div>

          <div className="flex flex-col space-x-0 space-y-2">
            <label>
              <input
               className='w-3 h-3 mr-2 text-primary'
                type="radio"
                checked={expirationType === 'noExpiration'}
                onChange={() => setExpirationType('noExpiration')}
              /> No Expiration
           </label>
          <div className='flex space-x-4'>
          <label>
              <input
              className='w-3 h-3 mr-2 text-primary'
                type="radio"
                checked={expirationType === 'expirationDate'}
                onChange={() => setExpirationType('expirationDate')}
              /> Expiration Date
            </label>
            <label>
              <input
              className='w-3 h-3 mr-2 text-primary'
                type="radio"
                checked={expirationType === 'availableDays'}
                onChange={() => setExpirationType('availableDays')}
              /> Available Days
            </label>
          </div>
          </div>

          {expirationType === 'expirationDate' && (
            <input
              type="date"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          )}

          <div className="flex items-center">
            <label className="mr-2">Hide Season</label>
            <input
              type="checkbox"
              checked={hideSeason}
              onChange={(e) => setHideSeason(e.target.checked)}
              className="toggle-switch"
            />
          </div>

          <div className="flex justify-start space-x-2">
            <button onClick={onClose} className="px-4 py-2 text-white rounded bg-primary">Cancel</button>
            <button className="px-4 py-2 text-white rounded bg-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonPopUp;

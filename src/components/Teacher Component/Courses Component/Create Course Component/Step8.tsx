import React from 'react';

interface Step8Props {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNext: () => void;
}

const Step8: React.FC<Step8Props> = () => {

  const handleSendForReview = () => {
    alert("Your course has been sent for review.");
  };

  const handleSaveAsDraft = () => {
    alert("Your course has been saved as a draft.");
  };

  return (
    <div>
      <div className='h-screen mt-12'>
        <div className='max-w-4xl shadow-2xl lg:p-8 space-y-6 h-[60%] mx-auto bg-cardBg flex flex-col items-center justify-center'>
          <h1 className='text-lg font-semibold text-center'>
            Your course is now all set up to be sent to <br /> admins for review
          </h1>
          <div className='space-x-3'>
            <button
              onClick={handleSendForReview}
              className='px-4 py-2 font-semibold text-white rounded-md bg-primary'
            >
              Send for Review
            </button>
            <button
              onClick={handleSaveAsDraft}
              className='px-4 py-2 font-semibold text-white rounded-md bg-primary'
            >
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step8;

import React from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const SendForReview = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSendForReview = async () => {
    const courseId = localStorage.getItem('courseId');
    if (!courseId) {
      enqueueSnackbar('No courseId found in localStorage!', { variant: 'error' });
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/courses/${courseId}/send-for-review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        enqueueSnackbar('Course sent for review successfully!', { variant: 'success' });

        // Remove relevant items from localStorage
        localStorage.removeItem('courseId');
        localStorage.removeItem('courseObjectives');
        localStorage.removeItem('coursePartData');
        localStorage.removeItem('whatStudentWillLearn');

        // Navigate to /CourseManagement
        navigate('/CourseManagement');
      } else {
        const errorData = await response.json();
        enqueueSnackbar(errorData.message || 'Failed to send course for review.', { variant: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      enqueueSnackbar('An unexpected error occurred. Please try again later.', { variant: 'error' });
    }
  };

  return (
    <div className='h-screen mt-12'>
      <div className='max-w-4xl shadow-2xl lg:p-8 space-y-6 h-[60%] mx-auto bg-cardBg flex flex-col items-center justify-center'>
        <h1 className='text-lg font-semibold text-center'>
          Your course is now all set up to be sent to <br /> admins for review
        </h1>
        <button
          onClick={handleSendForReview}
          className='px-4 py-2 font-semibold text-white rounded-md bg-primary'
        >
          Send for Review
        </button>
      </div>
    </div>
  );
};

export default SendForReview;

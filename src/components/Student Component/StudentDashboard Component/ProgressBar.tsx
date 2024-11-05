// import React from 'react';

interface ProgressBarProps {
      progress: number;
    }
    
    function ProgressBar({ progress }: ProgressBarProps) {
      return (
        <div>
          <div className="flex justify-between mb-1 text-sm text-gray-500">
            <span className="font-semibold text-center text-primary">{progress}% Completed</span>
            <span></span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-secondary h-1.5 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      );
    }
    
    export default ProgressBar;
    
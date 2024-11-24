import { useState } from "react";
import AdminFileInput from "../../AdminComponent/Landing/AdminFileInput";
import StartLiveNext from "./StartLiveNext";

function StartLiveLecture() {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // State to track the form step

  const handleNext = () => {
    setCurrentStep(2); // Move to the next form
  };


  return (
    <div className="bg-white border shadow-sm lg:w-[50%] p-4 rounded-lg mx-auto space-y-4 w-full">
      {currentStep === 1 && (
        <>
          <h1 className="text-xl font-semibold">Set up your live lecture</h1>
          <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter Your Title"
              className="rounded-md border-slate-400"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">
              Description
            </label>
            <textarea
              name=""
              rows={3}
              id=""
              placeholder="Write a Short Description"
              className="rounded-md border-slate-400"
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col space-y-1 w-[50%]">
              <label className="font-semibold" htmlFor="">
                Starting Date
              </label>
              <input
                className="rounded-md border-slate-400"
                type="date"
              />
            </div>
            <div className="flex flex-col space-y-1 w-[50%]">
              <label className="font-semibold" htmlFor="">
                Starting time
              </label>
              <input
                className="rounded-md border-slate-400"
                type="time"
              />
            </div>
          </div>
          <div>
            <label className="font-semibold" htmlFor="">
              Attachment
            </label>
            <AdminFileInput label="" onChange={() => {}} />
          </div>
          <div className="flex items-center gap-5">
            <h5 className="font-medium">Allow Discussion</h5>
            <button
              type="button"
              onClick={() => setIsNotificationEnabled(!isNotificationEnabled)}
              className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors ${
                isNotificationEnabled ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`${
                  isNotificationEnabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-2 w-2 transform rounded-full bg-white transition-transform`}
              />
            </button>
          </div>
          <div>
            <button
              onClick={handleNext} // Move to the next form
              className="px-4 py-2 text-white rounded-md bg-primary"
            >
              Next
            </button>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <StartLiveNext onPrevious={() => setCurrentStep(1)} onClose={() => setCurrentStep(1)}/>
        </>
      )}
    </div>
  );
}

export default StartLiveLecture;

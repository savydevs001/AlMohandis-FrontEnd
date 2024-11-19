// import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import SearchTeacher from "./SearchTeacher";

type Props = {
  unselectedItems: string[];
  selectedItems: string[];
};

function CreateTeacherToggleTable({ unselectedItems, selectedItems }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <SearchTeacher />

      <div className="flex flex-col items-center justify-center w-full gap-4 p-6 lg:flex-row">
        {/* Unselected Items Section */}
        <div className="lg:w-[40%] w-[80%] space-y-2">
          <h1 className="font-semibold text-center text-primary">UnSelected</h1>
          <div>
            <div className="p-6 bg-white border border-primary">
              <div className="flex items-center gap-8 p-2">
                <input className="w-3 h-3 text-primary" type="checkbox" />
                <p className="text-pTag">Select All</p>
              </div>
              {unselectedItems.map((item, index) => (
                <div key={index} className="flex items-center gap-8 p-2">
                  <input className="w-3 h-3 text-primary" type="checkbox" />
                  <p className="text-pTag">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrows Section */}
        <div className="flex flex-col items-center justify-center rotate-90 lg:rotate-0">
          <FaArrowLeftLong />
          <FaArrowRightLong />
        </div>

        {/* Selected Items Section */}
        <div className="lg:w-[40%] w-[80%] ">
          <div className="w-[100%] space-y-2">
            <h1 className="font-semibold text-center text-primary">Selected</h1>
            <div>
              <div className="p-6 text-white border bg-primary">
                <div className="flex items-center gap-8 p-2">
                  <input className="w-3 h-3 text-pTag " type="checkbox" />
                  <p>Select All</p>
                </div>
                {selectedItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-8 p-2">
                    <input className="w-3 h-3 text-pTag" type="checkbox" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTeacherToggleTable;

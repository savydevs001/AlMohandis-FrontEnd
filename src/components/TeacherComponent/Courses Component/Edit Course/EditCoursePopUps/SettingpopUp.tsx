import React, { useState } from 'react';
import axios from 'axios';

const AccessibilityPopup: React.FC<{ onClose: () => void; courseId: string }> = ({ onClose, courseId }) => {
  // State management for form fields
  const [isFree, setIsFree] = useState(false);
  const [studentAccessType, setStudentAccessType] = useState<string[]>([]);
  const [academicStage, setAcademicStage] = useState<number[]>([]);
  const [broughtFromTeacherId, setBroughtFromTeacherId] = useState<string | null>(null);
  const [canAccessIfPurchased, setCanAccessIfPurchased] = useState(false);

  const toggleAccessType = (type: string) => {
    setStudentAccessType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleAcademicStage = (stage: number) => {
    setAcademicStage((prev) =>
      prev.includes(stage) ? prev.filter((s) => s !== stage) : [...prev, stage]
    );
  };

  const handleSaveChanges = async () => {
    const payload = {
      studentAccessType,
      academicStage,
      canAccessIfPurchased,
      isFree,
      broughtFromTeacherId,
    };

    try {
      const response = await axios.patch(
        `http://localhost:5000/api/courses/${courseId}/accessibility`,
        payload
      );
      console.log('Accessibility updated:', response.data);
      onClose(); // Close the popup on success
    } catch (error) {
      console.error('Error updating accessibility:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[90%] max-w-xl p-6 lg:text-[.8vw] text-[3.3vw] bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-semibold">Accessibility Settings</h2>
          <div className="space-y-4 mt-4">
            <div className="flex items-center gap-4">
              <input
                className="w-3 h-3 text-primary"
                type="checkbox"
                checked={isFree}
                onChange={(e) => setIsFree(e.target.checked)}
              />
              <p className="text-[#555]">Free</p>
            </div>
            <div className="flex items-center gap-10 lg:gap-36">
              <h5 className="font-semibold">Type</h5>
              <div className="flex items-center gap-2 lg:text-[.8vw] text-[3.3vw]">
                <p
                  className={`px-4 py-1 rounded-full cursor-pointer ${
                    studentAccessType.includes('INTERNAL')
                      ? 'bg-primary text-white'
                      : 'bg-[#999] text-black'
                  }`}
                  onClick={() => toggleAccessType('INTERNAL')}
                >
                  Internal
                </p>
                <p
                  className={`px-4 py-1 rounded-full cursor-pointer ${
                    studentAccessType.includes('EXTERNAL')
                      ? 'bg-primary text-white'
                      : 'bg-[#999] text-black'
                  }`}
                  onClick={() => toggleAccessType('EXTERNAL')}
                >
                  External
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10 lg:gap-16">
              <h5 className="font-semibold">Academic Stage</h5>
              <div className="flex flex-wrap items-center gap-1 lg:text-[.8vw] text-[3vw]">
                {[1, 2, 3, 4].map((stage) => (
                  <p
                    key={stage}
                    className={`px-3 py-1 rounded-full cursor-pointer ${
                      academicStage.includes(stage)
                        ? 'bg-primary text-white'
                        : 'bg-[#999] text-black'
                    }`}
                    onClick={() => toggleAcademicStage(stage)}
                  >
                    Stage {stage}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="font-semibold">Buying Status</h5>
              <div className="flex items-center gap-4">
                <input
                  className="w-2 h-2 text-primary"
                  type="checkbox"
                  checked={canAccessIfPurchased}
                  onChange={(e) => setCanAccessIfPurchased(e.target.checked)}
                />
                <p className="text-[#555]">Can Access If Purchased</p>
              </div>
              <select
                className="py-1 rounded-xl bg-cardBg lg:w-80 w-72"
                value={broughtFromTeacherId || ''}
                onChange={(e) => setBroughtFromTeacherId(e.target.value || null)}
              >
                <option value="">Select Teacher</option>
                <option value="cm3796awo0003omloei9v438r">Teacher 1</option>
                <option value="teacher2">Teacher 2</option>
                <option value="teacher3">Teacher 3</option>
              </select>
            </div>
          </div>
          <div className="space-x-4 mt-4">
            <button
              className="px-4 py-2 text-white rounded bg-primary"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
            <button
              className="px-4 py-2 border rounded border-primary text-primary"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPopup;

import { useState } from "react";

function AdminAccountSettingForm() {
      // Placeholder for notification toggle state
      const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
    
      return (
        <div className="flex flex-col items-center bg-white border rounded-md lg:flex-row ">
          {/* Account Setting Header */}
          <div className="lg:w-[30%] w-full">
            <h1 className="text-lg font-semibold text-center">Account Setting</h1>
          </div>
    
          {/* Account Setting Form */}
          <div className="lg:w-[70%] w-full border p-4">
            <form className="flex flex-col space-y-3">
              {/* Notification Toggle */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Notifications</p>
                <button
                  type="button"
                  onClick={() => setIsNotificationEnabled(!isNotificationEnabled)}
                  className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors ${
                    isNotificationEnabled ? 'bg-teal-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`${
                      isNotificationEnabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-2 w-2 transform rounded-full bg-white transition-transform`}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
    
    export default AdminAccountSettingForm;
    
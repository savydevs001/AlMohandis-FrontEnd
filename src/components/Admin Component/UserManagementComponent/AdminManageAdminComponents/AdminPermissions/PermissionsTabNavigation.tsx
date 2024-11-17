import React from 'react';

type TabNavigationProps = {
  selectedTab: string;
  onTabClick: (tab: string) => void;
};

const tabs = [
  'General', 'Teachers', 'Students', 'Guardians', 'Assistants', 'Admins', 'Courses', 'Subjects'
];

const PermissionsTabNavigation: React.FC<TabNavigationProps> = ({ selectedTab, onTabClick }) => {
  return (
    <div className="flex flex-wrap items-start gap-3 mt-4 mb-2 border-b lg:space-x-4 lg:mb-4 lg:mt-0 lg:gap-0">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`lg:py-2 oy-1 lg:px-4 px-2 ${
            selectedTab === tab ? 'border-b-2 border-teal-500 font-semibold' : ''
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PermissionsTabNavigation;
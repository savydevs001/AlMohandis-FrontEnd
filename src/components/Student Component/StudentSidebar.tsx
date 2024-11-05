import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdOutlineDashboard, MdAssignment } from "react-icons/md";
import { RiLiveFill, RiCalendarCheckFill } from "react-icons/ri";
import { PiChairBold } from "react-icons/pi";
import { FaBookReader, FaBookmark, FaBullhorn } from 'react-icons/fa';
import { IoSendSharp } from "react-icons/io5";
import { GrSupport } from "react-icons/gr";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsCalendar2CheckFill } from 'react-icons/bs';
import logo from '../../assets/dashboardlogo.png';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const StudentSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const handleBodyClick = (e: MouseEvent) => {
    const sidebarElement = document.querySelector('.sidebar') as HTMLElement;
    const target = e.target as EventTarget;
    if (
      isSidebarOpen &&
      sidebarElement &&
      !(target instanceof Element && 
        (sidebarElement.contains(target) || target.closest('.menu-button')))
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.addEventListener('click', handleBodyClick);
    }
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div className="sticky top-0 left-0 w-full bg-teal-100 lg:p-4 h-fit md:hidden">
        <button onClick={toggleSidebar} className="p-2 text-black rounded-md menu-button">
          <AiOutlineMenu size={30} />
        </button>
      </div>

      <div className={`fixed lg:sticky top-0 left-0 w-64 h-full lg:h-[100vh] bg-primary z-50 sidebar transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <button onClick={toggleSidebar} className="absolute text-white top-4 right-4 md:hidden">
          <AiOutlineClose size={30} />
        </button>

        <div className="px-6 py-2 w-[90%] text-lg font-bold text-center">
          <img src={logo} alt="Logo" />
        </div>
        
        <ul className="p-4 space-y-1">
          <SidebarItem to="/StudentDashboard" icon={<MdOutlineDashboard />} label="Dashboard" />
          <SidebarItem 
            icon={<PiChairBold />} 
            label="Courses" 
            isDropdown={true}
            isOpen={isCoursesDropdownOpen}
            onToggle={() => setIsCoursesDropdownOpen(prev => !prev)}
            dropdownItems={[
              { to: "/courses/myCourses", label: "My Courses" },
              { to: "/courses/buyCourses", label: "Buy Courses" }
            ]}
          />
          <SidebarItem to="/liveLectures" icon={<RiLiveFill />} label="Live Lectures" />
          <SidebarItem to="/studentAssignments" icon={<MdAssignment />} label="Assignments" />
          <SidebarItem to="/professors" icon={<RiCalendarCheckFill />} label="Professors" />
          <SidebarItem to="/favorites" icon={<FaBookmark />} label="Favorites" />
          <SidebarItem to="/chat" icon={<BsCalendar2CheckFill />} label="Attendance" />
          <SidebarItem to="/chat" icon={<IoSendSharp />} label="Chat" />
          <SidebarItem to="/schedule" icon={<FaBookReader />} label="Registered Subject" />
          <SidebarItem 
            icon={<GrSupport />} 
            label="Support" 
            isDropdown={true}
            isOpen={isSupportDropdownOpen}
            onToggle={() => setIsSupportDropdownOpen(prev => !prev)}
            dropdownItems={[
              { to: "/support/faq", label: "FAQ" },
              { to: "/support/contact", label: "Contact Support" }
            ]}
          />
          <SidebarItem to="/assistant" icon={<FaBullhorn />} label="Promotion Content" />
        </ul>
      </div>
    </>
  );
};

interface SidebarItemProps {
  to?: string;
  icon: JSX.Element;
  label: string;
  isDropdown?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  dropdownItems?: { to: string; label: string }[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, label, isDropdown, isOpen, onToggle, dropdownItems }) => {
  const location = useLocation();

  // Adjusted logic to determine active state for dropdown items
  const isActive = to 
    ? location.pathname.startsWith(to) 
    : dropdownItems ? dropdownItems.some(item => location.pathname.startsWith(item.to)) : false;

  return (
    <>
      <li
        className={`flex items-center justify-between w-full p-2 text-base rounded hover:bg-teal-600 ${isActive ? 'text-secondary font-semibold' : 'text-txtColor'}`}
        onClick={isDropdown ? onToggle : undefined}
      >
        {to ? (
          <NavLink to={to} className="flex items-center w-full gap-4">
            <div className="flex items-center gap-4">
              {icon} {label}
            </div>
          </NavLink>
        ) : (
          <div className="flex items-center w-full gap-4 cursor-pointer">
            <div className="flex items-center gap-4">
              {icon} {label}
            </div>
            {isDropdown && (
              <div className="ml-auto">
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            )}
          </div>
        )}
      </li>
      {isDropdown && isOpen && dropdownItems && (
        <ul className="pl-6 space-y-0.5 text-sm text-gray-300">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.to} className="block p-1 rounded hover:bg-teal-600">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default StudentSidebar;

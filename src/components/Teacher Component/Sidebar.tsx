import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiLiveFill, RiCalendarCheckFill } from 'react-icons/ri';
import { PiChairBold } from 'react-icons/pi';
import { MdAssignment } from 'react-icons/md';
import { FaNewspaper, FaCalendarAlt, FaBookReader } from 'react-icons/fa';
import { FaAngleUp } from "react-icons/fa";

import { IoSendSharp } from 'react-icons/io5';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { GrSupport } from 'react-icons/gr';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../assets/dashboardlogo.png';
import { FaAngleDown } from 'react-icons/fa6';

// Define the Sidebar component
const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Close the sidebar when clicking outside of it
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
      {/* Menu Icon for Mobile */}
      <div className="sticky top-0 left-0 w-full bg-teal-100 lg:p-4 h-fit md:hidden">
        <button onClick={toggleSidebar} className="p-2 text-black rounded-md menu-button">
          <AiOutlineMenu size={30} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed lg:sticky top-0 left-0 w-64 h-full lg:h-[100vh] bg-primary z-50 sidebar transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        {/* Close Icon */}
        <button onClick={toggleSidebar} className="absolute text-white top-4 right-4 md:hidden">
          <AiOutlineClose size={30} />
        </button>

        <div className="px-6 py-2 w-[90%] text-lg font-bold text-center">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="p-2 px-4 space-y-1">
          <SidebarItem to="/dashboard" icon={<MdOutlineDashboard />} label="Dashboard" />
          <SidebarItem to="/liveLectures" icon={<RiLiveFill />} label="Live Lectures" />
          <SidebarItem to="/courses" icon={<PiChairBold />} label="Courses" />
          <SidebarItem to="/assignments" icon={<MdAssignment />} label="Assignments" />
          <SidebarItem to="/exams" icon={<FaNewspaper />} label="Exams" />

          {/* Dropdown for Attendance */}
          <SidebarDropdown label="Attendance" icon={<RiCalendarCheckFill />}>
            <SidebarItem to="/viewAttendence" icon={null} label="View Attendance" />
            <SidebarItem to="/markAttendence" icon={null} label="Mark Attendance" />
          </SidebarDropdown>

          <SidebarItem to="/chat" icon={<IoSendSharp />} label="Chat" />
          <SidebarItem to="/assistant" icon={<HiOutlineDesktopComputer />} label="Assistants" />

          {/* Dropdown for Subjects */}
          <SidebarDropdown label="Subjects" icon={<FaBookReader />}>
            <SidebarItem to="/subjects/math" icon={null} label="Math" />
            <SidebarItem to="/subjects/science" icon={null} label="Science" />
          </SidebarDropdown>

          {/* Dropdown for Support */}
          <SidebarDropdown label="Support" icon={<GrSupport />}>
            <SidebarItem to="/support/faq" icon={null} label="FAQ" />
            <SidebarItem to="/support/contact" icon={null} label="Contact Support" />
          </SidebarDropdown>

          <SidebarItem to="/promotionalContent" icon={<GrSupport />} label="Promotional Content" />
          <SidebarItem to="/schedule" icon={<FaCalendarAlt />} label="Schedule" />
        </ul>
      </div>
    </>
  );
};

// Sidebar Item Interface
interface SidebarItemProps {
  to: string;
  icon: JSX.Element | null;
  label: string;
}

// Sidebar Item Component
const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, label }) => {
  return (
    <li className="relative z-[1] flex items-center gap-4 p-2 text-base rounded hover:bg-teal-600">
      <NavLink 
        to={to} 
        className={({ isActive }) => 
          isActive ? 'text-secondary font-semibold flex items-center gap-4' : 'text-txtColor flex items-center gap-4'}
      >
        {icon && icon} {label}
      </NavLink>
    </li>
  );
};

// Sidebar Dropdown Interface
interface SidebarDropdownProps {
  label: string;
  icon: JSX.Element;
  children: React.ReactNode;
}

// Sidebar Dropdown Component
const SidebarDropdown: React.FC<SidebarDropdownProps> = ({ label, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <li className="relative z-[1]">
      <button 
        className="flex items-center justify-between w-full p-2 text-base rounded text-txtColor hover:bg-teal-600"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-4">
          {icon} {label}
        </div>
        <span className='text-xs'>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </button>

      {/* Dropdown menu */}
      <ul
  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[100rem]' : 'max-h-0'} dropdown-content`}
  style={{
    paddingLeft: '1rem', 
    marginTop: isOpen ? '0rem' : '0',
  }}
>
  {children}
</ul>
</li>
 
  );
};

export default Sidebar;

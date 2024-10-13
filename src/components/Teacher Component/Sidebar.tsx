import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { PiChairBold } from "react-icons/pi";
import { MdAssignment } from "react-icons/md";
import { FaNewspaper, FaCalendarAlt, FaBookReader } from "react-icons/fa";
import { RiCalendarCheckFill } from "react-icons/ri";
import { IoSendSharp } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GrSupport } from "react-icons/gr";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../../assets/dashboardlogo.png';

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Close the sidebar when clicking outside of it
  const handleBodyClick = (e: MouseEvent) => {
    const sidebarElement = document.querySelector('.sidebar') as HTMLElement;
    
    // Check if sidebar is open, sidebarElement exists, and clicked target is not in the sidebar or menu button
    if (
      isSidebarOpen && 
      sidebarElement && 
      !sidebarElement.contains(e.target as Node) && 
      !e.target.closest('.menu-button')
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when sidebar is open
    if (isSidebarOpen) {
      document.body.addEventListener('click', handleBodyClick);
    }
    
    return () => {
      // Remove event listener when component unmounts or sidebar closes
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Menu Icon */}
      <div className="sticky top-0 left-0 w-full p-4 h-fit md:hidden">
        <button onClick={toggleSidebar} className="p-2 text-black bg-teal-200 rounded-md menu-button">
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
        
        <ul className="p-4 space-y-1">
          <SidebarItem to="/dashboard" icon={<MdOutlineDashboard />} label="Dashboard" />
          <SidebarItem to="/liveLectures" icon={<RiLiveFill />} label="Live Lectures" />
          <SidebarItem to="/courses" icon={<PiChairBold />} label="Courses" />
          <SidebarItem to="/assignments" icon={<MdAssignment />} label="Assignments" />
          <SidebarItem to="/exams" icon={<FaNewspaper />} label="Exams" />
          <SidebarItem to="/attendance" icon={<RiCalendarCheckFill />} label="Attendance" />
          <SidebarItem to="/chat" icon={<IoSendSharp />} label="Chat" />
          <SidebarItem to="/assistant" icon={<HiOutlineDesktopComputer />} label="Assistants" />
          <SidebarItem to="/subjects" icon={<FaBookReader />} label="Subjects" />
          <SidebarItem to="/support" icon={<GrSupport />} label="Support" />
          <SidebarItem to="/schedule" icon={<FaCalendarAlt />} label="Schedule" />
        </ul>
      </div>
    </>
  );
};

interface SidebarItemProps {
  to: string;
  icon: JSX.Element;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, label }) => {
  return (
    <li className="flex items-center gap-4 p-2 text-sm rounded hover:bg-teal-600">
      <NavLink 
        to={to} 
        className={({ isActive }) => 
          isActive ? 'text-secondary font-semibold flex items-center gap-4' : 'text-txtColor flex items-center gap-4'}
      >
        {icon} {label}
      </NavLink>
    </li>
  );
};

export default Sidebar;

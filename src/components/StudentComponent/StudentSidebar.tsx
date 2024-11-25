import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdOutlineDashboard, MdAssignment } from "react-icons/md";
import { AiTwotoneSchedule } from "react-icons/ai";

import { RiLiveFill, RiCalendarCheckFill } from "react-icons/ri";
import { PiChairBold } from "react-icons/pi";
import { FaBookReader, FaBookmark, FaBullhorn } from 'react-icons/fa';
import { IoSendSharp } from "react-icons/io5";
import { GrSupport } from "react-icons/gr";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsCalendar2CheckFill } from 'react-icons/bs';
import logo from '../../assets/dashboardlogo.png';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoMdLogOut } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";

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
      {/* Menu Button - Only visible on small screens */}
      <div className="sticky top-0 left-0 w-full p-4 bg-teal-100 lg:hidden h-fit">
        <button onClick={toggleSidebar} className="p-2 text-black rounded-md menu-button">
          <AiOutlineMenu size={30} />
        </button>
      </div>

      {/* Sidebar - Visible on large screens, togglable on small screens */}
      <div className={`fixed lg:relative top-0 left-0 w-60 bg-primary z-50 sidebar transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 min-h-screen flex flex-col justify-between`}>
        
        {/* Sidebar top section (Logo and Nav Links) */}
        <div>
          {/* Close Button - Only visible on small screens */}
          <button onClick={toggleSidebar} className="absolute text-white top-4 right-4 lg:hidden">
            <AiOutlineClose size={30} />
          </button>

          <div className="px-6 py-2 w-[90%] text-lg font-bold text-center">
            <img src={logo} alt="Logo" />
          </div>

          <ul className="px-4 py-4 space-y-1">
            <SidebarItem to="/StudentDashboard" icon={<MdOutlineDashboard />} label="Dashboard" />
            <SidebarItem 
              icon={<PiChairBold />} 
              label="Courses" 
              isDropdown={true}
              isOpen={isCoursesDropdownOpen}
              onToggle={() => setIsCoursesDropdownOpen(prev => !prev)}
              dropdownItems={[
                { to: "/myCourses", label: "My Courses" },
                { to: "/buyCourses", label: "Buy Courses" }
              ]}
            />
            <SidebarItem to="/StudentLiveLectures" icon={<RiLiveFill />} label="Live Lectures" />
            <SidebarItem to="/myassignments" icon={<MdAssignment />} label="Assignments" />
            <SidebarItem to="/Professors" icon={<RiCalendarCheckFill />} label="Professors" />
            <SidebarItem to="/StudentFavourites" icon={<FaBookmark />} label="Favorites" />
            <SidebarItem to="/StudentAttendance" icon={<BsCalendar2CheckFill />} label="Attendance" />
            <SidebarItem to="/StudentChat" icon={<IoSendSharp />} label="Chat" />
            <SidebarItem to="/StudentSchedule" icon={<AiTwotoneSchedule />} label="Schedule" />
            <SidebarItem to="/RegisteredSubject" icon={<FaBookReader />} label="Registered Subject" />
            <SidebarItem 
              icon={<GrSupport />} 
              label="Support" 
              isDropdown={true}
              isOpen={isSupportDropdownOpen}
              onToggle={() => setIsSupportDropdownOpen(prev => !prev)}
              dropdownItems={[
                { to: "/StudentLiveChat", label: "Live Chat" },
                { to: "/StudentSupportTicket", label: " Support Tickets" }
              ]}
            />
            <SidebarItem to="/assistant" icon={<FaBullhorn />} label="Promotion Content" />
          </ul>
        </div>

        {/* Sidebar bottom section (Profile and Logout) */}
        <div className='p-4 space-y-3'>
          <NavLink to='/StudentProfile'>
          <div className='flex items-center gap-3'>
            <div className='flex items-center justify-center w-6 h-6 bg-white rounded-full '>
              <FcBusinessman />
            </div>
            <p className='text-white'>Student 1</p>
          </div>
            </NavLink>
          <button className='flex items-center gap-3 px-4 py-1 bg-white rounded-xl text-primary'>
            <IoMdLogOut />
            Logout
          </button>
        </div>
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

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiLiveFill, RiCalendarCheckFill } from 'react-icons/ri';
import { PiChairBold } from 'react-icons/pi';
import { MdAssignment } from 'react-icons/md';
import { FaNewspaper, FaCalendarAlt, FaBookReader } from 'react-icons/fa';
// import { FaAngleUp } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";

import { IoSendSharp } from 'react-icons/io5';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { GrSupport } from 'react-icons/gr';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../assets/dashboardlogo.png';
// import { FaAngleDown } from 'react-icons/fa6';
import { FcBusinessman } from 'react-icons/fc';
import { IoIosArrowDown, IoIosArrowUp, IoMdLogOut } from 'react-icons/io';



const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
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
      <div className="sticky top-0 left-0 w-full bg-teal-100 lg:hidden h-fit">
        <button onClick={toggleSidebar} className="p-2 text-black rounded-md menu-button">
          <AiOutlineMenu size={30} />
        </button>
      </div>

      <div
        className={`fixed lg:relative top-0 left-0 w-60 bg-primary z-50 sidebar transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 min-h-screen flex flex-col justify-between`}
      >
        <div>
          <button onClick={toggleSidebar} className="absolute text-white top-4 right-4 lg:hidden">
            <AiOutlineClose size={30} />
          </button>

          <div className="px-6 py-2 w-[90%] text-lg font-bold text-center">
            <img src={logo} alt="Logo" />
          </div>

          <ul className="px-4 py-4 space-y-1">
          <SidebarItem to="/dashboard" icon={<MdOutlineDashboard />} label="Dashboard" />

          <SidebarItem to="/liveLectures" icon={<RiLiveFill />} label="Live Lectures" />
          <SidebarItem to="/courses" icon={<PiChairBold />} label="Courses" />
          <SidebarItem to="/assignments" icon={<MdAssignment />} label="Assignments" />
          <SidebarItem to="/exams" icon={<FaNewspaper />} label="Exams" />
          <SidebarItem
              icon={<RiCalendarCheckFill />}
              label="Attendance"
              isDropdown={true}
              isOpen={openDropdown === 'Attendance'}
              onToggle={() => toggleDropdown('Attendance')}
              dropdownItems={[
                { to: "/viewAttendence", label: "View Attendance" },
                { to: "/markAttendence", label: "Mark Attendance" },
              ]}
            />
 <SidebarItem to="/Chat" icon={<IoSendSharp />} label="Chat" />
 <SidebarItem to="/assistant" icon={<HiOutlineDesktopComputer />} label="Assistants" />
            
            <SidebarItem
              icon={<FaBookReader />}
              label="Subjects"
              isDropdown={true}
              isOpen={openDropdown === 'Content Management'}
              onToggle={() => toggleDropdown('Content Management')}
              dropdownItems={[
                { to: "/Subjects", label: "All" },
                { to: "/subjects/science", label: "Groups" },
              ]}
            />

            <SidebarItem
              icon={<GrSupport />}
              label="Support"
              isDropdown={true}
              isOpen={openDropdown === 'Support'}
              onToggle={() => toggleDropdown('Support')}
              dropdownItems={[
                { to: "/support/faq", label: " Live Chat" },
                { to: "/Support", label: "Support Tickets" }
              ]}
            />
    <SidebarItem to="/promotionalContent" icon={<FaBullhorn />} label="Promotional Content" />
    <SidebarItem to="/schedule" icon={<FaCalendarAlt />} label="Schedule" />
          </ul>
        </div>

        <div className="p-4 space-y-3">
          <NavLink to="/AdminProfile" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <FcBusinessman />
            </div>
            <p className="text-white">Admin 1</p>
          </NavLink>
          <button className="flex items-center gap-3 px-4 py-1 bg-white rounded-xl text-primary">
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

  const isActive = to
    ? location.pathname === to
    : dropdownItems
    ? dropdownItems.some(item => location.pathname === item.to)
    : false;

  return (
    <>
      <li
        className={`flex items-center justify-between w-full p-2 text-base rounded hover:bg-teal-600 ${
          isActive ? 'text-secondary font-semibold' : 'text-txtColor'
        }`}
        onClick={isDropdown ? onToggle : undefined}
      >
        {to ? (
          <NavLink to={to} className="flex items-center w-full gap-4">
            <div className="flex items-center gap-4 text-sm">
              {icon} {label}
            </div>
          </NavLink>
        ) : (
          <div className="flex items-center w-full gap-4 cursor-pointer">
            <div className="flex items-center gap-4 text-sm">
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
        <ul className="pl-8 text-sm text-txtColor">
          {dropdownItems.map((item, index) => (
            <li key={index} className="py-[.1vw]">
              <NavLink
                to={item.to}
                className={`text-xs font-thin ${
                  location.pathname === item.to ? 'text-secondary' : 'text-BgColor'
                }`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Sidebar;


;

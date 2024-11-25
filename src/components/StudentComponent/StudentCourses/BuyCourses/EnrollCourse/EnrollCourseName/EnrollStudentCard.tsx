import React from 'react';
import { IconType } from "react-icons";

interface EnrollStudentCardProps {
  Icon: IconType;  // Type for icon component
  title: string;   // Text for the h5 tag
  subtitle: string; // Text for the h6 tag
}

const EnrollStudentCard: React.FC<EnrollStudentCardProps> = ({ Icon, title, subtitle }) => {
  return (
    <div className="p-3 space-y-2 bg-white border rounded-sm w-fit">
      <Icon className="text-xl font-bold" /> {/* Render the icon component */}
      <h5 className="font-semibold">{title}</h5>
      <h6 className="text-lg font-semibold text-primary">{subtitle}</h6>
    </div>
  );
};

export default EnrollStudentCard;

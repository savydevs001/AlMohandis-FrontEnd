import React from 'react';

interface TicketCardProps {
  status: string;
  bgColor: string;
  textColor: string;
}

const TicketCard: React.FC<TicketCardProps> = ({ status, bgColor, textColor }) => {
  return (
    <div className="w-full p-4 bg-white border rounded-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Ticket Title</h1>
        <p
          className={`py-0 px-2 rounded-2xl font-semibold`}
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
        >
          {status}
        </p>
      </div>
      <p>Technical</p>
      <h5 className="text-pTag">Submitted on 20-02-2023</h5>
    </div>
  );
};

export default TicketCard;

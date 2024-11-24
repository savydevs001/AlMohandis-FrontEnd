// import React from 'react'

import UpComingCard from "./UpComingCard"
type Props = {
  onView: () => void; // Add callback prop
};
const UpComingAssignment: React.FC<Props> = ({ onView }) => {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      <UpComingCard onView={onView} />
    </div>
  )
}

export default UpComingAssignment

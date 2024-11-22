import { NavLink } from "react-router-dom";
import img from "../../../../src/assets/book.webp";

const GroupCard = ({group}:any) => {
  return (
    <div className="flex flex-col items-start justify-between p-3 space-y-6 bg-white border shadow-sm lg:items-center rounded-xl lg:flex-row lg:space-y-0">
    <div className="flex flex-col items-center gap-4 lg:flex-row">
      <div className="lg:w-[17%] w-[80%]">
        <img className="rounded-lg" src={img} alt="Subject Thumbnail" />
      </div>
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">Group Title</h1>
        <p className="text-lg font-semibold text-pTag">
          Duration: <span className="font-normal">Monay</span>
        </p>
        <p className="text-sm font-semibold text-pTag">
          Teacher: <span className="font-normal"></span>
        </p>
      </div>
    </div>
    <div className="flex flex-col lg:w-[25%] w-[100%] items-start gap-2 lg:border-l-4 border-BgColor px-4">
      <NavLink to={`group/123}`} className="w-full">
        <button className="w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary">
          View
        </button>
      </NavLink>
      <button className="w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary">
        Group Chat
      </button>
      <button className="w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary">
        Generate QR
      </button>
    </div>
  
  </div>
  )
}

export default GroupCard
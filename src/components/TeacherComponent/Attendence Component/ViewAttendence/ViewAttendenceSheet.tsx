interface ViewAttendenceSheetProps {
  name: string;
  present: number;
  total: number;
}

function ViewAttendenceSheet({ name, present, total }: ViewAttendenceSheetProps) {
  const absent = total - present;

  return (
    <div className="flex items-center border-2 border-red-500 w-full justify-between bg-white shadow-sm rounded-md p-3">
    <div>
      <h5 className="text-[#888] font-medium">{name}</h5>
    </div>
    <div className="flex items-center gap-3">
      <p className="text-[#11C111]">
        Present : <span className="text-black">{present}</span>
      </p>
      <span className="text-[#AFAFAF]">|</span>
      <p className="text-[#FF0000]">
        Absent : <span className="text-black">{absent}</span>
      </p>
    </div>
  </div>
  );
}

export default ViewAttendenceSheet;

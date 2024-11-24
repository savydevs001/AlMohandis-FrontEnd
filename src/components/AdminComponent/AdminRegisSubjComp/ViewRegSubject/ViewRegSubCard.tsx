
interface ViewRegSubCardProps {
  student: {
    fullName: string;
    email: string;
    regNo: string;
    department: string;
    guardianNo: string;
    class:string
  };
}

function ViewRegSubCard({ student }: ViewRegSubCardProps) {
  return (
    <div className="flex flex-col justify-between p-3 space-y-4 bg-white border rounded-lg lg:items-start lg:flex-row lg:space-y-0">
  <div className="space-y-1">
  <p className="text-sm text-gray-600">
    <span className="font-semibold">Full Name:</span> {student.fullName || "N/A"}
  </p>
  <p className="text-sm text-gray-600">
    <span className="font-semibold">Email:</span> {student.email || "N/A"}
  </p>
  <p className="text-sm text-gray-600">
    <span className="font-semibold">Class:</span> {student.class || "N/A"}
  </p>
  <p className="text-sm text-gray-600">
    <span className="font-semibold">Department:</span> {student.department || "N/A"}
  </p>
  <p className="text-sm text-gray-600">
    <span className="font-semibold">Guardian No:</span>{" "}
    <a
      className="text-blue-500 underline hover:text-blue-700"
    >
      324324455
    </a>
  </p>
</div>


      <div className="flex lg:flex-col lg:w-[10%] gap-2">
        <button className="w-full px-4 py-2 font-semibold border rounded-md text-primary border-primary">
          Remove
        </button>
        <button className="w-full px-4 py-2 font-semibold border rounded-md text-primary border-primary">
          Freeze
        </button>
      </div>
    </div>
  );
}

export default ViewRegSubCard;

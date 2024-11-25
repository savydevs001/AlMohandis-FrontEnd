import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import DashBoardHeader from "../DashboardComponent/DashBoardHeader";
import ClassesSchudle from "./ClassesSchudle";

function Schdules() {
  const [weeklySchedules, setWeeklySchedules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSchedules = async () => {
      const token = Cookies.get("token"); // Retrieve token from cookies
      if (!token) {
        setError("Unauthorized: Token not found.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/admin/getAllSchedules", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch schedules");
        }

        const data = await response.json();
        setWeeklySchedules(data.weeklySchedules || []);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="lg:w-full w-[90%] mx-auto">
      <div className="flex items-center justify-between w-full gap-4 p-2">
        <h1 className="text-2xl font-bold">Schedules</h1>
        <DashBoardHeader />
      </div>
      <div>
        {weeklySchedules.length > 0 ? (
          weeklySchedules.map((daySchedule) => (
            <ClassesSchudle
              key={daySchedule.day}
              day={daySchedule.day}
              schedules={daySchedule.schedules}
            />
          ))
        ) : (
          <div>No schedules available for this week.</div>
        )}
      </div>
    </div>
  );
}

export default Schdules;

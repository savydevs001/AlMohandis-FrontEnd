import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-08-01', Students: 40, Teachers: 20, Guardians: 10, Assistants: 5, Admins: 15, Total: 90 },
  { date: '2024-08-02', Students: 50, Teachers: 25, Guardians: 15, Assistants: 8, Admins: 12, Total: 110 },
  { date: '2024-08-03', Students: 60, Teachers: 30, Guardians: 18, Assistants: 10, Admins: 14, Total: 132 },
  // Add more data entries as needed
];

const BarChart2 = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} margin={{ top: 20, right: 50, left: 20, bottom: 20 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" angle={-45} textAnchor="end" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* Bars for each user category */}
      <Bar dataKey="Students" fill="#1f77b4" />
      <Bar dataKey="Teachers" fill="#9467bd" />
      <Bar dataKey="Guardians" fill="#8c564b" />
      <Bar dataKey="Assistants" fill="#e377c2" />
      <Bar dataKey="Admins" fill="#bcbd22" />
      <Bar dataKey="Total" fill="#ff7f0e" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChart2;



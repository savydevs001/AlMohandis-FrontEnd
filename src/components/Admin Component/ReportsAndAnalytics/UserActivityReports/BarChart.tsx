import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', topLine: 500, bottomLine: 100 },
  { name: 'Feb', topLine: 450, bottomLine: 150 },
  { name: 'Mar', topLine: 550, bottomLine: 120 },
];

const BarCharts = () => (
  <div className="">
    <BarChart className="w-full p-2 bg-white rounded-lg shadow-sm" width={300} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* Bar for topLine */}
      <Bar dataKey="topLine" fill="blue" />
      {/* Bar for bottomLine */}
      <Bar dataKey="bottomLine" fill="blue" />
    </BarChart>
  </div>
);

export default BarCharts;

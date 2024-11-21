import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', topLine: 500, bottomLine: 100 },
  { name: 'Feb', topLine: 450, bottomLine: 150 },
  { name: 'Mar', topLine: 550, bottomLine: 120 },
];

const UserGrowthGraph = () => (
  <div className="">
    <LineChart className='w-full p-2 bg-white rounded-lg shadow-sm' width={300} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* Line at the top */}
      <Line type="monotone" dataKey="topLine" stroke="#82ca9d" strokeWidth={2} />
      {/* Line at the bottom */}
      <Line type="monotone" dataKey="bottomLine" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  </div>
);

export default UserGrowthGraph;

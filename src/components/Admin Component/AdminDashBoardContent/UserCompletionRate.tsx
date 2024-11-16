import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Red', value: 400 },
  { name: 'Blue', value: 300 },
  { name: 'Yellow', value: 300 },
  { name: 'Green', value: 200 },
];

const COLORS = ['#FF6347', '#4682B4', '#FFD700', '#32CD32'];

const UserCompletionRate = () => (
  <div className="lg:w-[30%] w-full p-4 bg-white rounded-lg shadow-md">
    <PieChart width={200} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius="80%"
        innerRadius="60%" // This makes it a doughnut
        fill="#8884d8"
        paddingAngle={5}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </div>
);

export default UserCompletionRate;

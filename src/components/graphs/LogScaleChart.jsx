import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 10 },
  { name: 'C', value: 100 },
  { name: 'D', value: 1000 },
  { name: 'E', value: 10000 }
];

const LogScaleChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis scale="log" domain={[1, 'auto']} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LogScaleChart;

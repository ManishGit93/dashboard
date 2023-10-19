import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    Expense: 4000,
    Income: 2400
  },
  {
    name: "Feb",
    Expense: 3000,
    Income: 3398
  },
  {
    name: "Mar",
    Expense: 2000,
    Income: 9800
  },
  {
    name: "Apr",
    Expense: 4780,
    Income: 3908
  },
  {
    name: "May",
    Expense: 1890,
    Income: 7890
  },
  {
    name: "Jun",
    Expense: 2390,
    Income: 3800
  },
  {
    name: "July",
    Expense: 3490,
    Income: 4300
  },
  {
    name: "Aug",
    Expense: 2000,
    Income: 9800
  },
  {
    name: "Sep",
    Expense: 2780,
    Income: 3908
  },
  {
    name: "Oct",
    Expense: 1890,
    Income: 8000
  },
  {
    name: "Nov",
    Expense: 2390,
    Income: 3800
  },
  {
    name: "Dec",
    Expense: 3490,
    Income: 4300
  }
];

const CustomBar = ({ fill, x, y, width, height }) => {
  return <rect x={x} y={y} width={width} height={height} fill={fill} rx={9} ry={9} className="bar" />;
};

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">${payload[0].value}</p>
      </div>
    );
  }

  return null;
};

const Bars = () => {
  return (
    <div className="h-72 flex-1 flex-col bg-white rounded-lg">
      <div className="flex items-center justify-between mx-2 p-2 ">
        <div className="font-semibold flex flex-col">
          <h2>Overview</h2>
          <h3 className="text-xs text-gray-400">Monthly Earning</h3>
        </div>
          <select name="" className="bg-gray-100 outline-none text-gray-400 text-sm px-3 rounded-lg py-1.5" id="">
              <option className="text-gray-100 bg-gray-100 text-sm" value="">
                Quartely
            </option>
          </select>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data}>
          <XAxis className="xaxis" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#333" }} />
          <Legend />
          <Bar dataKey="Income" fill="#0ea5e9" shape={<CustomBar />} legendType="none" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Bars;

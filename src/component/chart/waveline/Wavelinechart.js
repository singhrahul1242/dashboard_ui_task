import React from "react";
import "./Wavelinechart.css";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Week 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Week 5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Week 6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Week 7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Wavelinechart = () => {
  return (
    <div className="waveline" width='100%'>
      <div className="text-box1">
        <span className="title1">Activities</span>
        <span className="year1">
          May-June 2023 <i class="fa-solid fa-caret-down"></i>
        </span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
      <LineChart
        // width={1150}
        // height={200}
        margin={{
          top: 15,
          bottom: 5,
        }}
        data={data}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#9BDD7C"/>
        <Line type="monotone" dataKey="pv" stroke="#E9A0A0" />
      </LineChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default Wavelinechart;

import React from "react";
import "./Piechart.css";
import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Basic Tees", value: 550 },
  { name: "Custom Short Pants", value: 310 },
  { name: "Super Hoodies", value: 140 },
];

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Piechart = () => {
  return (
    <div className="piechart-container">
      <div className="text-box">
        <p className="title">Top Products</p>
        <span className="year">
          May-Jun 2023 <i class="fa-solid fa-caret-down"></i>
        </span>
      </div>
      <div className="pie-section">
        <div className="pie-diagram">
          <PieChart width={270} height={150}>
            <Pie
              data={data}
              cx={150}
              cy={70}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={60}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="pie-details">
          <div className="text">
            <span className="dot color1"></span>
            <span className="pie-title">Basic Tees</span>
          </div>
          <div className="text">
            <span className="dot color2"></span>
            <span className="pie-title">Custom Short Pants</span>
          </div>
          <div className="text">
            <span className="dot color3"></span>
            <span className="pie-title">Super Hoodies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piechart;

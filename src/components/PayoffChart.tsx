"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  price: number;
  profit: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: DataPoint }[];
}

const data: DataPoint[] = [
  { price: 3400, profit: 0 },
  { price: 3450, profit: 0 },
  { price: 3500, profit: 0 },
  { price: 3550, profit: 50 },
  { price: 3600, profit: 100 },
  { price: 3650, profit: 150 },
];

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 flex flex-col gap-0 mb-50">
        <p className="text-tiny">ETH Price now:</p>
        <span className="font-bold text-xs">{payload[0].payload.price}</span>
      </div>
    );
  }
  return null;
};

const PayoffChart: React.FC = () => {
  const [cursorX, setCursorX] = useState<number | null>(null);

  return (
    <div className="w-full max-w-lg mt-8">
      <ResponsiveContainer width="100%" height={150}>
        <LineChart
          data={data}
          onMouseMove={(e) => {
            if (e && e.activeCoordinate) {
              setCursorX(e.activeCoordinate.x);
            }
          }}
          onMouseLeave={(e) => {
            if (e && e.activeCoordinate) {
                setCursorX(e.activeCoordinate.x);
              }
          }}
        >
          <XAxis dataKey="price" stroke="#ffffff80" axisLine={true} tick={false} />
          <Tooltip content={<CustomTooltip />} cursor={false} active />
          <Line type="linear" dataKey="profit" stroke="#00ff99" strokeWidth={2} dot={false} />
          
          {/* Persistent Custom Cursor Line */}
          {cursorX !== null && (
            <svg>
              <line
                x1={cursorX}
                x2={cursorX}
                y1=""
                y2="77%"
                stroke="white"
                strokeWidth={1}
              />
            </svg>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PayoffChart;

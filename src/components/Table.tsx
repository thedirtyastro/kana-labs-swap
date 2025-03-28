"use client";
import Image from "next/image";
import Selector from "../../public/images/chevron-selector-vertical.svg";
import { useState } from "react";

const Table = () => {
  const columns: { name: string; key: keyof DataItem }[] = [
    { name: "Time", key: "time" },
    { name: "Market", key: "position" },
    { name: "Side", key: "side" },
    { name: "Amount", key: "amount" },
    { name: "Time till execution", key: "executionTime" },
  ];

  const data = [
    {
      time: "1:41:13 PM",
      market: "ETH",
      side: "Buy",
      amount: "200",
      status: "Open",
      executionTime: "02:34",
      orderId: "87654321",
      date: "12-Mar-24",
      optionType: "Put",
      position: "• Long",
      tradeType: "LPO",
      duration: "Minutes",
      img: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    },
    {
      time: "2:15:30 PM",
      market: "BTC",
      side: "Sell",
      amount: "150",
      status: "Closed",
      executionTime: "03:12",
      orderId: "12345678",
      date: "12-Mar-24",
      optionType: "Call",
      position: "• Short",
      tradeType: "MKT",
      duration: "Hours",
      img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    },
    {
      time: "3:05:45 PM",
      market: "XRP",
      side: "Buy",
      amount: "500",
      status: "Open",
      executionTime: "01:45",
      orderId: "23456789",
      date: "12-Mar-24",
      optionType: "Put",
      position: "• Long",
      tradeType: "LPO",
      duration: "Minutes",
      img: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    },
    {
      time: "4:22:10 PM",
      market: "ADA",
      side: "Sell",
      amount: "300",
      status: "Open",
      executionTime: "02:50",
      orderId: "34567890",
      date: "12-Mar-24",
      optionType: "Call",
      position: "• Short",
      tradeType: "MKT",
      duration: "Minutes",
      img: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    },
    {
      time: "5:17:55 PM",
      market: "SOL",
      side: "Buy",
      amount: "100",
      status: "Closed",
      executionTime: "04:10",
      orderId: "45678901",
      date: "12-Mar-24",
      optionType: "Put",
      position: "• Long",
      tradeType: "LPO",
      duration: "Hours",
      img: "https://cryptologos.cc/logos/solana-sol-logo.png",
    },
    {
      time: "6:45:20 PM",
      market: "DOGE",
      side: "Sell",
      amount: "1000",
      status: "Open",
      executionTime: "00:58",
      orderId: "56789012",
      date: "12-Mar-24",
      optionType: "Call",
      position: "• Short",
      tradeType: "MKT",
      duration: "Minutes",
      img: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    },
  ];

  type DataItem = {
    time: string;
    market: string;
    side: string;
    amount: string;
    status: string;
    executionTime: string;
    orderId: string;
    date: string;
    optionType: string;
    position: string;
    tradeType: string;
    duration: string;
    img: string;
  };

  type SortOrder = "asc" | "desc";

  function sortByKey(
    array: DataItem[],
    key: keyof DataItem,
    order: SortOrder = "asc"
  ): DataItem[] {
    return [...array].sort((a, b) => {
      let valA: any = a[key];
      let valB: any = b[key];

      // Convert numeric values
      if (!isNaN(Number(valA)) && !isNaN(Number(valB))) {
        valA = Number(valA);
        valB = Number(valB);
      }

      if (valA < valB) return order === "asc" ? -1 : 1;
      if (valA > valB) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  const [sortData, setSortData] = useState<DataItem[]>(data);

  const handleSort = (key: keyof DataItem, order: SortOrder = "asc") => {
    const sortedArray = sortByKey([...sortData], key, order);
    setSortData(sortedArray);
  };

  // Example usage:
  return (
    <div>
      <div className="flex flex-row h-12 text-xs bg-card border border-white/10 rounded-t-2xl">
        <div className="px-6 bg-white/[6%] text-white font-extrabold h-full items-center justify-center flex rounded-tl-2xl">
          Open Orders
        </div>
        <div className="px-6 h-full items-center justify-center flex">
          Positions
        </div>
        <div className="px-6 h-full items-center justify-center flex">
          Trades
        </div>
      </div>
      <table className="w-full px-4 bg-card  rounded-b-2xl overflow-hidden  table-fixed">
        <thead className="text-tiny bg-tabs border border-white/10 text-tp ">
          <tr className="px-4">
            {columns.map((col, index) => (
              <th
                key={index}
                className={`px-4 py-2 font-normal cursor-pointer text-left w-1/5 ${
                  index === 0 ? "ml-4" : ""
                }`}
                onClick={() => handleSort(col.key)}>
                {col.name}
                <Image
                  src={Selector}
                  alt="Selector"
                  className="inline-block ml-1"
                  height={12}
                  width={12}
                />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortData.map((row, index) => (
            <tr key={index} className=" border border-white/10">
              <td className="w-1/5">
                <div className="flex flex-col ml-4 py-4 gap-1">
                  <span className="text-xs">{row.time}</span>
                  <span className="text-tiny">{row.date}</span>
                </div>
              </td>
              <td className="w-1/5">
                <div className="flex flex-col ml-4 py-4 gap-1">
                  <div className="flex flex-row gap-1 items-center text-xs">
                    <img src={row.img} alt={row.market} className="h-3 w-3" />
                    <span>{row.market}</span>
                  </div>
                  <div className="text-tiny ">
                    {row.optionType}{" "}
                    <span
                      className={`text-tiny ${
                        row.position === "• Long"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}>
                      {row.position}
                    </span>
                  </div>
                </div>
              </td>
              <td className="w-1/5">
                <span className="text-xs ml-4">{row.side}</span>
              </td>
              <td className="w-1/5">
                <div className="flex flex-col ml-4 py-4 gap-1">
                  <span className="text-xs">{row.amount}</span>
                  <span className="text-tiny">{row.tradeType}</span>
                </div>
              </td>
              <td className="w-1/5">
                <div className="flex flex-col ml-4 py-4 gap-1">
                  <span className="text-xs">{row.executionTime}</span>
                  <span className="text-tiny">{row.duration}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

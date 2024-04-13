import React from "react";
import NavBar from "./NavBar"; 
import { HiChevronDown } from "react-icons/hi2";

const ListItem = ({ item, handleRowClick }) => {
  console.log(item);
  return (
    <tr
      key={item.item_id}
      className="border-[1px] grid grid-cols-12 gap-x-10"
    >
      <td className="gap-x-1 flex text-sm justify-centerfont-semibold text-left col-span-3 text-blue-500  ">{item.Scan_name}<div className="mt-1 text-black"><HiChevronDown /></div></td>
      <td className="col-span-2 text-sm  text-left">
        <a href={item.URL} className="text-sm  text-blue-500 underline">
          {item.URL}
        </a>
      </td>
      <td className="ml-5 text-sm  col-span-2 text-left">{item.ScanEngine}</td>
      <td className="col-span-1 text-sm  text-left">{item.status}</td>
      <td className="col-span-1 text-sm  font-extrabold text-left">
        {item.RiskScore}
      </td>
      <td className="col-span-1 text-sm  text-left">{item.TotalVulnerablities}</td>
      <td className="col-span-1">
        <div className="text-sm flex rounded-md">
          <div className="p-2 bg-red-500">{item.Severity.Critical}</div>
          <div className="p-2 bg-orange-500">{item.Severity.High}</div>
          <div className="p-2 bg-yellow-500">{item.Severity.Medium}</div>
          <div className="p-2 bg-green-500">{item.Severity.Low}</div>
        </div>
      </td>
      <td onClick={() => handleRowClick(item.item_id)} className="cursor-pointer text-center col-span-1">...</td>
    </tr>
  );
};


export default ListItem;

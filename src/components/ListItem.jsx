import React from "react";
import NavBar from "./NavBar"; 

const ListItem = ({ item, handleRowClick }) => {
  console.log(item);
  return (
    <tr
      key={item.item_id}
      className="border-[1px] grid grid-cols-9 gap-x-10"
    >
      <td className="col-span-1 text-center">{item.Scan_name}</td>
      <td className="col-span-1 text-center">
        <a href={item.URL} className="text-center text-blue-500 underline">
          {item.URL}
        </a>
      </td>
      <td className="ml-5 col-span-2 text-center">{item.ScanEngine}</td>
      <td className="col-span-1 text-center">{item.status}</td>
      <td className="col-span-1 font-extrabold text-center">
        {item.RiskScore}
      </td>
      <td className="col-span-1 text-center">{item.TotalVulnerablities}</td>
      <td className="col-span-1">
        <div className="flex rounded-md">
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

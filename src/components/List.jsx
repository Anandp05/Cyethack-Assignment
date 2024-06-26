import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeStudent } from "../store/slices/studentSlice";
import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import SearchBar from "./SearchBar";

const List = () => {
  const students = useSelector((state) => state.student.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleButtonClick = (studentId) => {
    dispatch(removeStudent(studentId));
  };

  const handleRowClick = (itemId) => {
    sessionStorage.setItem("selectedItemId", itemId);
    navigate("/list/details");
  };

  return (
    <div className="w-full h-full">
      <div className=" w-full flex flex-col bg-gray-200">
        <Header></Header>
        <SearchBar></SearchBar>
      </div>

      <div className="mt-5">
        <NavBar></NavBar>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 gap-x-10 text-sm font-bold text-left grid grid-cols-12   px-8 ">
            <th className="px-4 my-auto col-span-3 py-2">Scan Name</th>
            <th className="px-4 my-auto col-span-2 py-2">Target URL</th>
            <th className="px-4 col-span-2 my-auto py-2">Scan Engine</th>
            <th className="px-4 col-span-1 my-auto py-2">Status</th>
            <th className="px-4 col-span-1 my-auto py-2">Risk Score</th>
            <th className="px-4  col-span-1 my-auto py-2">Total Vulnerabilities</th>
            <th className="px-4 col-span-1 my-auto py-2">Severity</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <ListItem
              key={student.item_id}
              item={student}
              handleRowClick={handleRowClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;

import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer"
import { useSelector } from "react-redux";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import NavBar from "./NavBar";
import SearchBar from "../components/SearchBar"


const Vulnerabilities = {
  Medium: {
    type: "Medium",
    content: "X-content-type-options Header Missing",
    value: "271",
    color: "yellow"
  },
  High: {
    type: "High",
    content: "Content Security Policy (CSP) Header Not Set",
    value: "271",
    color: "red"
  },
  High_2: {
    type: "High",
    content: "Missing Anti-clickjacking Header",
    value: "271",
    color: "red"
  },
  Low: {
    type: "Low",
    content: "Information Disclosure-Suspicious Comments",
    value: "271",
    color: "green"
  },
  Low_2: {
    type: "Low",
    content: "User Agent Fuzzer",
    value: "271",
    color: "green"
  }, 
  Low_3: {
    type: "Low",
    content: "Information Disclosure-Suspicious Comments",
    value: "271",
    color: "green"
  },
  Low_4: {
    type: "Low",
    content: "Information Disclosure-Suspicious Comments",
    value: "271",
    color: "green"
  },
  Low_5: {
    type: "Low",
    content: "Information Disclosure-Suspicious Comments",
    value: "271",
    color: "green"
  },
};

const ListDetail = () => {
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("userData")) || null
  );
  const [loading, setLoading] = useState(false);
  const selectedItemId = sessionStorage.getItem("selectedItemId");
  const students = useSelector((state) => state.student.students);

  const sumOfSeverities = () => {
    if (!userData) return 0;
    return (
      userData.Severity.Critical +
      userData.Severity.High +
      userData.Severity.Medium +
      userData.Severity.Low
    );
  };

  useEffect(() => {
    if (userData?.item_id?.toString() !== selectedItemId) {
      setLoading(true);
      const user = students.find(
        (student) => student.item_id.toString() === selectedItemId
      );
      if (user) {
        setTimeout(() => {
          setUserData(user);
          sessionStorage.setItem("userData", JSON.stringify(user)); // Save userData in sessionStorage
          setLoading(false);
        }, 1000); // Simulate a 1-second loading delay
      }
    }
  }, [selectedItemId, students, userData]);

  let Critical = userData ? userData.Severity.Critical : 0;
  let High = userData ? userData.Severity.High : 0;
  let Medium = userData ? userData.Severity.Medium : 0;
  let Low = userData ? userData.Severity.Low : 0;
  let Risk=userData?userData.Severity.Risk_Score:0;
  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="w-full h-full flex justify-center mt-60">
        <svg
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#007bff"
          stroke-width="10"
          r="35"
          stroke-dasharray="164.93361431346415 56.97787143782138"
          transform="rotate(17.8693 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
      </div>
      ) : userData ? (
        <div className="w-full ">
        <SearchBar></SearchBar>
            <NavBar></NavBar>
        
          <div className="flex mt-5 justify-around w-full">
            
          <div className="border-[1px] w-[12%] text-center">
          <div id="sum" className="w-full border-[1px] text-center bg-[purple] px-10 py-5">
              {sumOfSeverities()}</div>
              <p className="border-[1px]">Total Vulnerabilities</p>
              </div>
            

              <div className="border-[1px] w-[12%] text-center">
            <div className="bg-[red] px-10 py-5">{Critical}</div>
            <p>Critical</p>
            </div>

            <div className="border-[1px] w-[12%] text-center">
            <div className="bg-[orange]  px-10 py-5">{High}</div>
            <p>High</p>
            </div>

            <div className="border-[1px] w-[12%] text-center">
            <div className="bg-[yellow]  px-10 py-5">{Medium}</div>
            <p>Medium</p>
            </div>

            <div className="border-[1px] w-[12%] text-center">
            <div className="bg-[green]  px-10 py-5">{Low}</div>
            <p>Low</p>
            </div>

          </div>
          <div className="mt-10 flex justify-around">
          <div className="flex flex-col ">
          <div className="flex  w-40">
          <ReactSpeedometer value={Risk} minValue={0} maxValue={10} />
          <div className="">
          <p className="bg-[yellow]  font-bold text-xl mt-1  text-center  w-20 h-10">{userData.Severity.Risk_Score}</p>
          <p className="">Risk Score</p>
          </div>
          </div>
          <div className="">
          <Bar
            data={{
              labels: ["Critical", "High", "Medium", "Low"],
              datasets: [
                {
                  label: "Severity",
                  data: [Critical, High, Medium, Low],
                  backgroundColor: ["red", "orange", "yellow", "green"]
                }
              ]
            }}
            options={{
              plugins: {
                title: {
                  text: "Severity Distribution"
                }
              }
            }}
          />
          </div>
          </div>
          <div className="!w-[60%]">
        <table className="mt-">
          <tbody className="border-[1px] w-full grid grid-cols-3 grid-rows-6">
          <tr className="border-[1px]  justify-center align-middle flex col-span-3">
          <td className="w-[50%]  text-center bg-[#6699ff] ">
          <button className="text-[white] bg-[#6699ff] text-center mt-[10px]">Top Vulnerabilities</button></td>
          <td className="w-[50%] text-center my-auto">Most Common CVE</td>
          </tr>
            {Object.keys(Vulnerabilities).map((key) => (
              <tr key={key} className="border-[1px]  grid grid-cols-3 col-span-3 row-span-1">
                <td className="col-span-1 my-auto text-center"><button className="w-[40%]  px-5 py-2 rounded-md" style={{ backgroundColor: Vulnerabilities[key].color }}>{Vulnerabilities[key].type}</button></td>
                <td className="col-span-1 my-auto text-center">{Vulnerabilities[key].content}</td>
                <td className="col-span-1 my-auto text-center">{Vulnerabilities[key].value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
          </div>
        </div>
      ) : (
        <div>No user data available.</div>
      )}
      
    </div>
  );
};

export default ListDetail;
